import React from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/reducers/AuthReducer";

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    const isLogout = window.confirm("Are you sure you want to logout?");
    if (isLogout) {
      dispatch(logoutUser());
      localStorage.clear();
      return <Redirect exact to={"/"} />;
    }
  };

  return (
    <Container>
      <Row>
        <Col md="12" className="pt-4">
          <Alert variant="primary">
            <h4>
              {" "}
              Hello you are login now.{" "}
              <button onClick={handleLogOut} className="btn btn-success ml-4">
                Logout
              </button>
            </h4>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
