import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Homepage extends Component {

    render = () => (
        <div>
            <h1>Sunpunch Home Page</h1>
            <NavLink activeClassName="active" exact to="/">
                Main
            </NavLink>
            {/* <NavLink activeClassName="active" exact to="/Dashboard">
                Dashboard
            </NavLink> */}
        </div>
    );
}

export default Homepage;