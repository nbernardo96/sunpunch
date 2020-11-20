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
    Col,
    Image
} from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Dashboard from "./dashboard";

class Homepage extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            user: {}
        }

        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword= this.changePassword.bind(this)
        this.submitHandler= this.submitHandler.bind(this)
    }

    changeEmail(e) {
        this.setState({username: e.target.value})
        console.log(this.state.username)
    }
    
    changePassword(e) {
        this.setState({password: e.target.value})
        console.log(this.state.password)
    }

    render = () => {
        
        return Object.keys(this.state.user).length === 0  || !this.state.user.valid ? (
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

        <div className="sunpunch-header">
            <h1>Sunpunch</h1>
            <h4>A clock in management system</h4>
        </div>

        <Container className="rounded form-container">
            <h3 className="text-center">Login</h3>
            <Row>
                <Col xs={8}>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" onChange={this.changeEmail} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" onChange={this.changePassword} />
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
    ): 
        <Dashboard user = { this.state.user } />
    }
    
    submitHandler(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/login', {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            this.setState({ user: res.data })
            console.log(this.state.user)
            console.log(this.state.username)
            console.log(this.state.password)
        })
    }
}

export default withRouter(Homepage);