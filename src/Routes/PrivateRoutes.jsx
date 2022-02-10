import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route exact path={"/dashboard"} component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default PrivateRoutes;
