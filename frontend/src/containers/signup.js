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
import axios from 'axios';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            department: '',
            employee_email: '',
            firstName: '',
            lastName: '',
            password1: '',
            password2: '',
            user: {}
        }
        this.changeDepartment = this.changeDepartment.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changePassword1= this.changePassword1.bind(this)
        this.changePassword2= this.changePassword2.bind(this)
        this.submitHandler= this.submitHandler.bind(this)
    }

    changeDepartment(e) {
        this.setState({department: e.target.value})
        console.log(this.state.department)
    }

    changeEmail(e) {
        this.setState({employee_email: e.target.value})
        console.log(this.state.employee_email)
    }
    
    changeFirstName(e) {
        this.setState({firstName: e.target.value})
        console.log(this.state.firstName)
    }
    
    changeLastName(e) {
        this.setState({lastName: e.target.value})
        console.log(this.state.lastName)
    }

    changePassword1(e) {
        this.setState({password1: e.target.value})
        console.log(this.state.password1)
    }

    changePassword2(e) {
        this.setState({password2: e.target.value})
        console.log(this.state.password2)
    }

    
    render = () => (
        <div>


        <Container className="rounded form-container">
            <h3 className="text-center">Signup</h3>
            <Row>
                <Col xs={8}>
                <Form onSubmit={ this.submitHandler }>

                    <Form.Group className="mt-4 mb-4">
                        <Row>
                            <Col>
                                <Form.Control placeholder="First name" onChange={this.changeFirstName} />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" onChange={this.changeLastName} />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group controlId="formBasicDeparment">
                        <Form.Control type="text" placeholder="Department" onChange={this.changeDepartment}/>
                        <Form.Text className="text-muted">
                        Select the department
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" onChange={this.changeEmail}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Confirm email"/>
                        <Form.Text className="text-muted">Re-enter your email for confirmation</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" onChange={this.changePassword1}/>
                        <Form.Text className="text-muted">Enter a password</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Confirm Password" onChange={this.changePassword2}/>
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

    submitHandler(e) {
        e.preventDefault();

        const { department, employee_email, firstName, lastName, password1, password2 } = this.state;
        const employee_name = `${firstName} ${lastName}`

        if(password1 === password2){    
            axios.post('http://localhost:5000/register', {
                department,
                employee_email: employee_email,
                employee_password: password1,
                employee_name
            }).then(res => {
                if (res.data.employee_email){
                    this.props.loadUser(res)
                    this.props.onRouteChange('dashboard')
                }
            })
        }

    }
}

export default Signup;