import { Redirect } from "react-router-dom";
import Constants from "../../utils/Constants";
import { useSelector } from "react-redux";

const NotFound = () => {
  const user = useSelector((state) => state.AuthReducer.user);

  if (user) {
    return <Redirect to={Constants.base_path + "dashboard"} exact />;
  } else {
    return <Redirect to={Constants.base_path} exact />;
  }
};
export default NotFound;
