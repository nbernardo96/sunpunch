import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <Navbar className="sunpunch-nav" expand="lg">
                    <Navbar.Brand href="/">Sunpunch</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="sunpunch-link-home" onClick={() => onRouteChange('signout')} >Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
        </Navbar>
      );
    } else {
      return (
        <Navbar className="sunpunch-nav" expand="lg">
                    <Navbar.Brand href="/">Sunpunch</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="sunpunch-link-home" onClick={() => onRouteChange('home')}>Home</Nav.Link>
                            <Nav.Link className="sunpunch-links" onClick={() => onRouteChange('login')} >Login</Nav.Link>
                            <Nav.Link  className="sunpunch-links" onClick={() => onRouteChange('signup')} >Signup</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
        </Navbar>
      );
    }
}

export default Navigation;