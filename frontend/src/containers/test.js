import React, { Component } from "react";
import axios from "axios";
import '../css/navbar.css'
import '../css/form.css'
import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Button,
    Form,
    Row,
    Col,
    Table
} from 'react-bootstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';


class Test extends Component {

    getUserData = async() => {
        try {
            const data = await axios.get(
                "https://nba-players.herokuapp.com/players-stats"
            );
            console.log(data);
        } catch (e) {
            console.log(e);
        };

        const columns = [
            { dataField: 'name', text: 'Player Name' }
        ]
    }

    render = () => (

        <div>
        <Navbar className="sunpunch-nav" expand="lg">
            <Navbar.Brand href="/">Sunpunch</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/" className="sunpunch-link-home">Home</Nav.Link>
                <Nav.Link href="/login" className="sunpunch-links">Login</Nav.Link>
                <Nav.Link href="/signup" className="sunpunch-links">Signup</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

        
    

        
    </div>
    );
}

export default Test;