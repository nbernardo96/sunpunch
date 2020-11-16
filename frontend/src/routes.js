import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import Homepage from "./containers/home";

const BaseRouter = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
        {/* <Route path="/Dashboard" component={Dashboard} /> */}
    </Switch>
);

export default BaseRouter;