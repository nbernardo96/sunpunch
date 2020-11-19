import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Homepage from "./containers/home";
import Login from "./containers/login";
import Signup from "./containers/signup";
import Dashboard from "./containers/dashboard";
import Test from "./containers/test"

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
            <Route exact path="/" component={Homepage} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Test" component={Test} />
        </Switch>
    </DebugRouter>
);

export default BaseRouter;