import React, { Component } from "react";
import '../css/navbar.css'
import '../css/dashboard.css'
import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Button,
    Form,
    Row,
    Col,
    Table,
    Image,
    Modal,
    Alert
} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import user from '../images/user.png';
import badge from '../images/badge.png';
import userEmail from '../images/email.png';
import axios from 'axios';
import moment from 'moment-timezone';

class Dashboard extends Component {
    
    state = {
        isOpen: false,
        punched: undefined,
        show: false,
        clocked: '',
        clockedMsg: ''
    }

    closeModal = e => {
        this.setState({ isOpen: false })
    }

    closeAlert = () => this.setState({ show: false, setShow: false })


    punchInHandler = e => {
        this.setState({ show: true, setShow: true, clocked: 'Clocked In!', clockedMsg: 'You have now clocked in. Have a great day!'  })
        axios.post('http://localhost:5000/clockIn', { 
            employee_email: this.props.user.email, 
            clock_in: new Date().toLocaleTimeString()
        })
    }

    clockOutButton = () => this.setState({ isOpen: true })

    punchOutHandler = e => {
        this.setState({ isOpen: false })
        this.setState({ show: true, setShow: true, clocked: 'Clocked Out!', clockedMsg: 'You are now clocked out, enjoy the rest of your day!'  })
        const today = new Date()
        axios.post('http://localhost:5000/clockOut', { 
            employee_email: this.props.user.email, 
            clock_out: today.toLocaleTimeString('en-US')
        })
    }

    render() {
    
    let prop = {};

    prop = this.props.user
    console.log(prop)
    
    const { department, email, name } = prop

    // var data = [
    //     { employee_email: 'johnnyappleseed@test.com', clock_date: '11/18/2020', clock_in: '08:30', clock_out: '17:00' },
    //     { employee_email: 'maryj@test.com', clock_date: '11/18/2020', clock_in: '08:45', clock_out: '17:00' },
    //     { employee_email: 'ashketchum@test.com', clock_date: '11/18/2020', clock_in: '09:00', clock_out: '17:30' },
    //     { employee_email: 'papermario@test.com', clock_date: '11/18/2020', clock_in: '09:00', clock_out: '17:30' },
    //     { employee_email: 'luigi@test.com', clock_date: '11/17/2020', clock_in: '10:30', clock_out: '18:45' },
    //     { employee_email: 'tomnook@ac.com', clock_date: '11/17/2020', clock_in: '09:30', clock_out: '17:45' },
    //     { employee_email: 'isabelle@ac.com', clock_date: '11/17/2020', clock_in: '09:30', clock_out: '17:45' },
    // ];

    return (
        <div>

        <Alert show={this.state.show} variant="success" className="text-center">
            <Alert.Heading>{this.state.clocked}</Alert.Heading>
            <p>
            {this.state.clockedMsg}
            </p>
            <hr />
            <div className="text-center">
            <Button onClick={ this.closeAlert } variant="outline-success">
                Close
            </Button>
            </div>
        </Alert>
        
        <Container className="mt-5 ml-5 employee-info" fluid>
                <Row>
                    <Col>
                        <Image src={user} className="dashboard-icons"/> Name: { name }
                    </Col>
                    <Col>
                    <Button size="sm" className="clockin-btn" onClick={ this.punchInHandler } >Clock in</Button>{' '}
                    </Col>
                    <Col>
                        <Button size="sm" className="clockout-btn" onClick={ this.clockOutButton } >Clock out</Button>{' '}
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Image src={badge} className="dashboard-icons"/> Name: { name }Department: { department }
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Image src={userEmail} className="dashboard-icons"/> Name: { name }Email: { email }
                    </Col>
                </Row>
        </Container>

        {/* <BootstrapTable data={ data } striped hover pagination version='4' className="container clockin-table">
                <TableHeaderColumn isKey dataField='employee_email'>Employee Email</TableHeaderColumn>
                <TableHeaderColumn dataField='clock_date'>Date</TableHeaderColumn>
                <TableHeaderColumn dataField='clock_in'>Clocked In</TableHeaderColumn>
                <TableHeaderColumn dataField='clock_out'>Clocked Out</TableHeaderColumn>
        </BootstrapTable> */}

        <Modal show={this.state.isOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Clock Out</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you would like to clock out?</Modal.Body>
            <Modal.Footer>
                <Button className="confirm-btn" onClick={ this.punchOutHandler }>Clock Out</Button>
                <Button className="cancel-btn" onClick={ this.closeModal }>Cancel</Button>
            </Modal.Footer>
        </Modal>

        <footer className="footer py-3">
            <div className="attributions">
                <div>Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a>, <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>, and <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
        </footer>

    </div>
    )};
}

export default Dashboard;