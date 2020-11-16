import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import Homepage from "./containers/home";
import Test from "./containers/test"

const BaseRouter = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/test" component={Test} />
    </Switch>
);

export default BaseRouter;
