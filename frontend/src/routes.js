import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import Homepage from "./containers/home";
import Login from "./containers/login";
import Signup from "./containers/signup";
import Dashboard from "./containers/dashboard";



const BaseRouter = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Dashboard" component={Dashboard} />
    </Switch>
);

export default BaseRouter;