import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Homepage from "./containers/home";
import Login from "./containers/login";
import Signup from "./containers/signup";
import Dashboard from "./containers/dashboard";

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



const BaseRouter = () => (
    <DebugRouter>
        <Switch>

            <Route exact path="/">
                <Homepage />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/signup">
                <Signup />
            </Route>

            <Route path="/dashboard">
                <Dashboard />
            </Route>

        </Switch>
    </DebugRouter>
);

export default BaseRouter;