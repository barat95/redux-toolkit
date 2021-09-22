import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRoutes from "./Routes/PublicRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { useSelector } from "react-redux";
import { setToken } from "./Services/HttpRequest";

function App() {
  const user = useSelector((state) => state.AuthReducer.user);
  let isAuth = false;
  if (user !== null) {
    setToken("token", user.jwt);
    isAuth = true;
  } else {
    isAuth = false;
  }
  return (
    <Router>
      {!isAuth && <PublicRoutes />}
      {isAuth && <PrivateRoutes />}
    </Router>
  );
}

export default App;
