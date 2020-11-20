import React, { Component } from "react";
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Homepage from "./containers/home";
import Login from "./containers/login";
import Signup from "./containers/signup";
import Dashboard from "./containers/dashboard";
import Test from "./containers/test"
import { Button } from "react-bootstrap";

class DebugRouter extends BrowserRouter {
  constructor(props){
    super(props);
    console.log('initial history is: ', JSON.stringify(this.history, null,2))
    this.history.listen((location, action)=>{
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      )
      console.log(`The last navigation action was ${action}`, JSON.stringify(this.history, null,2));
    });
  }
}


const BaseRouter = ({ loadUser, onRouteChange }) => (
    <DebugRouter>
        <Switch>
            <Route path="/" component={ () => <Homepage loadUser={ loadUser } onRouteChange={ onRouteChange } /> } />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/test" component={Test} />
        </Switch>
    </DebugRouter>
);

export default BaseRouter;