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
    Image
} from 'react-bootstrap';
import user from '../images/user.png';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';


class Dashboard extends Component {
    
    punchInHandler = e =>{
        axios.post('http://localhost:5000/clockIn', { 
            employee_email: this.props.user.email, 
            clock_in: new Date().toLocaleTimeString()
        })
    }

    punchOutHandler = e => {
        axios.post('http://localhost:5000/clockOut', { 
            employee_email: this.props.user.email, 
            clock_out: new Date().toLocaleTimeString()
        })
    }

    render() {
    
    let prop = {};

    

    
    prop = this.props.user

    
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
                        <Button size="sm" className="clockout-btn" onClick={ this.punchOutHandler } >Clock out</Button>{' '}
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        Department: { department }
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        Email: { email }
                    </Col>
                </Row>
        </Container>

            <Table striped bordered hover size="sm" responsive className="clockin-table">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Clocked In</th>
                    <th>Clocked Out</th>
                    <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>October 27, 2020</td>
                    <td>9:30 AM</td>
                    <td>6:30 PM</td>
                    <td>worked in call center and processed applications</td>
                    </tr>
                    <tr>
                    <td>October 28, 2020</td>
                    <td>9:32 AM</td>
                    <td>6:48 PM</td>
                    <td>call center</td>
                    </tr>
                    <tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr>
                    <tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr><tr>
                    <td>October 29, 2020</td>
                    <td>6:23 AM</td>
                    <td>3:00 PM</td>
                    <td>was asked to come in early, left early</td>
                    </tr>
                </tbody>
            </Table>

        <footer className="footer py-3">
            This is a footer
        </footer>

    </div>
    )};
}

export default Dashboard;