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



class Login extends Component {

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

        <Container className="mt-5 ml-5 employee-info" fluid>
                <Row>
                    <Col>
                    <Image src={user} className="dashboard-icons"/> Name: Nicole Bernardo
                    </Col>
                    <Col>
                        <Button size="sm" className="clockin-btn">Clock in</Button>{' '}
                    </Col>
                    <Col>
                        <Button size="sm" className="clockout-btn">Clock out</Button>{' '}
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        Department: Programming
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        Email: nicole@sunshinelifehealth.com
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
    );
}

export default Login;