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
} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import user from '../images/user.png';
import badge from '../images/badge.png';
import userEmail from '../images/email.png';
import axios from 'axios';
import moment from 'moment-timezone';

class Admin extends Component {
    
    state = {
        isOpen: false,
        punched: undefined,
        selectOut: '',
        employees: []
    }

    closeModal = e => {
        this.setState({  selectOut: e.target.outerText })
        this.setState({ isOpen: false })
    }

    punchInHandler = e =>{
        axios.post('http://localhost:5000/clockIn', { 
            employee_email: this.props.user.email, 
            clock_in: new Date().toLocaleTimeString()
        })
    }

    clockOutButton = () => this.setState({ isOpen: true })


    punchOutHandler = e => {
        if(this.state.selectOut === 'Clock Out'){}
        axios.post('http://localhost:5000/clockOut', { 
            employee_email: this.props.user.email, 
            clock_out: new Date().toLocaleTimeString()
        })
    }

    componentDidMount() {
        axios.get('http://localhost:5000/clock')
            .then(res => {
                
                this.setState({ employees:  res.data.map(user => {
                    return {
                        clock_in: user.clock_in.split('T')[1].substring(0, 5),
                        clock_date: moment(user.clock_date.split('T')[0]).format('L'),
                        clock_out: user.clock_out ? user.clock_out.split('T')[1].substring(0, 5): null,
                        employee_email: user.employee_email
                    }
                })})
                
            })
    }


    render() {
    
    let prop = {};

    prop = this.props.user
    console.log(prop)
    
    const { department, email, name } = prop
    
    return (
        <div>
        
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
                        <Image src={badge} className="dashboard-icons"/> Department: { department }
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Image src={userEmail} className="dashboard-icons"/> Email: { email }
                    </Col>
                </Row>
        </Container>

        <BootstrapTable data={ this.state.employees } striped hover pagination version='4' className="container clockin-table">
                <TableHeaderColumn isKey dataField='employee_email'>Employee Email</TableHeaderColumn>
                <TableHeaderColumn dataField='clock_date'>Date</TableHeaderColumn>
                <TableHeaderColumn dataField='clock_in'>Clocked In</TableHeaderColumn>
                <TableHeaderColumn dataField='clock_out'>Clocked Out</TableHeaderColumn>
        </BootstrapTable>

        <Modal show={this.state.isOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Time </Modal.Title>
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

export default Admin;