import React, { Component } from 'react';
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
import axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom';
import { authLogin } from '../store/actions/auth';
import { connect } from 'react-redux';

class Login extends Component {
    
    state = {
        username: "",
        password: ""
    };
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        this.props.login(username, password);
    };

    render = () => {
        const { error, loading, token } = this.state;
        const { username, password } = this.state; 

        return token ? <Redirect to="/dashboard" /> : (
                    <div>
                    <Navbar className="sunpunch-nav" expand="lg">
                        <Navbar.Brand href="/">Sunpunch</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signup">Signup</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            
            
                    <Container className="rounded form-container">
                        <h3 className="text-center">Login</h3>
                        <Row>
                            <Col xs={8}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" name="username" placeholder="Enter email" onChange={this.handleChange}/>
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
            
            
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                                    <a className="text-muted signup-link" href="/signup">New user? Signup</a>
                                </Form.Group>
                                <Button type="submit">
                                    Submit
                                </Button>
                            </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ) 
    
    }
    
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(authLogin(username, password))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);