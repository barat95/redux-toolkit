import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default PublicRoutes;
