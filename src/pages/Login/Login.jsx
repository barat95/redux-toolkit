import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Form, Row, Col } from "react-bootstrap";
import Constants from "../../utils/Constants";
import { sendFormData } from "../../utils/Helper";
import { loginSubmit } from "../../redux/reducers/AuthReducer";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { useIntl } from "react-intl";
import { defaultLang } from "../../redux/reducers/LangReducer";
import { setStorageData } from "../../utils/Helper";

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.AuthReducer.loading);
  const intl = useIntl();

  const handleSubmit = (event) => {
    dispatch(loginSubmit(sendFormData(event)));
  };
  const formFields = [
    {
      label: "Email",
      type: "email",
      name: "email",
      value: "",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      value: "",
      required: true,
    },
  ];

  const handleLanguage = (event) => {
    let value = event.target.value;
    setStorageData("lang", value);
    dispatch(defaultLang({ locale: value }));
  };

  return (
    <div>
      <Container className="justify-content-center d-flex align-items-center h-100vh">
        <Row className="max-wd">
          <Col sm="12">
            <Form onSubmit={handleSubmit}>
              <h2>{intl.formatMessage({ id: "loginHeading" })}</h2>
              {formFields.map((data, index) => (
                <Form.Group as={Row} key={index}>
                  <Form.Label column sm="2">
                    {data.label}
                    {data.required && <span className="text-danger">*</span>}
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type={data.type}
                      placeholder={data.label}
                      name={data.name}
                      required={data.required}
                    />
                  </Col>
                </Form.Group>
              ))}
              <Form.Group className="text-right">
                <SubmitButton
                  text="Login"
                  loader={loading}
                  buttonClass="login-btn"
                />
                <select className="form-control" onChange={handleLanguage}>
                  <option value={""}>Select Language</option>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                </select>
              </Form.Group>
              <Form.Group className="text-right">
                <NavLink exact to={Constants.base_path + "forgot-password"}>
                  Forgot Password?
                </NavLink>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
