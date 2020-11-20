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
        super(props);
        this.state = {
            employee_email: '',
            employee_password: '',
            user: {}
        }
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    
    changeEmail(e) {
        this.setState({employee_email: e.target.value})
        console.log(this.state.employee_email)
    }

    changePassword(e) {
        this.setState({employee_password: e.target.value})
        console.log(this.state.employee_password)
    }

    render() {
        return  (
            <div>

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
                {/* 
                    TODO:
                        1. create page for if user is logged in - dashboard
                        2. display login page if user is not logged in
                */}

            </div>
        )
    }
    
    submitHandler(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/login', {
            employee_email: this.state.employee_email,
            employee_password: this.state.employee_password
        }).then(res => {
            console.log(res)

            if (res.data.employee_email && res.data.employee_email === 'maurice@sunshinelifehealth.com'){
                this.props.loadUser(res)
                this.props.onRouteChange('admin')
            }  else if(res.data.employee_email) {
                this.props.loadUser(res)
                this.props.onRouteChange('dashboard')
            }
        })
    }
}

export default (Homepage);