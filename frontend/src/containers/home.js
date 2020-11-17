import React, { Component } from "react";
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
    Col
} from 'react-bootstrap';


class Homepage extends Component {

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

        <div className="sunpunch-header">
            <h1>Sunpunch</h1>
            <h4>A clock in management system</h4>
        </div>

        <Container className="rounded form-container">
            <h3 className="text-center">Login</h3>
            <Row>
                <Col xs={8}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password"/>
                        <a className="text-muted signup-link" href="/signup">New user? Signup</a>
                    </Form.Group>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>

        {/* 
            TODO:
                1. create page for if user is logged in - dashboard
                2. display login page if user is not logged in
        */}

    </div>
    );
}

export default Homepage;