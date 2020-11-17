import React, { Component } from "react";
import '../css/home.css'
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


class Signup extends Component {

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


        <Container className="rounded form-container">
            <h3 className="text-center">Signup</h3>
            <Row>
                <Col xs={8}>
                <Form>

                    <Form.Group className="mt-4 mb-4">
                        <Row>
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Confirm email"/>
                        <Form.Text className="text-muted">Re-enter your email for confirmation</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password"/>
                        <Form.Text className="text-muted">Enter a password</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Confirm Password"/>
                        <Form.Text className="text-muted">Re-enter your password for confirmation</Form.Text>
                    </Form.Group>

                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    </div>
    );
}

export default Signup;