import React, { memo } from "react";
import { Route, Switch } from "react-router-dom";

import MainJobListingPage from "../MainPage";
import Detailing from "../Detailing";

const routes = memo(() => {
  return (
    <Switch>
      <Route exact path={"/details/:uuid"}>
        <Detailing />
      </Route>
      <Route exact path={"/"}>
        <MainJobListingPage />
      </Route>
    </Switch>
  );
});

export default routes;
