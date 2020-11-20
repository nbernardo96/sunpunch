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
import userEmail from '../images/email.png'
import axios from 'axios';

class Admin extends Component {
    
    state = {
        isOpen: false,
        punched: undefined,
        selectOut: ''
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

    punchOutHandler = e => {
        this.setState({ isOpen: true })

        if(this.state.selectOut === 'Okay')
        axios.post('http://localhost:5000/clockOut', { 
            employee_email: this.props.user.email, 
            clock_out: new Date().toLocaleTimeString()
        })
    }

    render() {
    
    let prop = {};
    let data = [];

    prop = this.props.user
    console.log(prop)
    
    const { department, email, name } = prop
    
    return (
        <div>
        
        <h1>ADMIN</h1>
        
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
                        <Image src={badge} className="dashboard-icons"/> Department: { department }
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Image src={userEmail} className="dashboard-icons"/> Email: { email }
                    </Col>
                </Row>
        </Container>

                {/* <DataTable
            keys="name"
            columns={columns}
            initialData={data}
            initialPageLength={5}
            clockinTable/> */}

            {/* <BootstrapTable
            data={ data }
            columns={ columns }
            /> */}

                 {/* <BootstrapTable data={ prop } striped hover pagination version='4' className="container clockin-table">
                     <TableHeaderColumn isKey dataField='employee_email'>Employee Email</TableHeaderColumn>
                     <TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
                     <TableHeaderColumn dataField='clocked_in'>Clocked In</TableHeaderColumn>
                     <TableHeaderColumn dataField='clocked_out'>Clocked Out</TableHeaderColumn>
                     <TableHeaderColumn dataField='notes'>Notes</TableHeaderColumn>
                 </BootstrapTable> */}

                <BootstrapTable data={ data } striped hover pagination version='4' className="container clockin-table">
                     <TableHeaderColumn isKey dataField='employee_email'>Employee Email</TableHeaderColumn>
                     <TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
                     <TableHeaderColumn dataField='clocked_in'>Clocked In</TableHeaderColumn>
                     <TableHeaderColumn dataField='clocked_out'>Clocked Out</TableHeaderColumn>
                     <TableHeaderColumn dataField='notes'>Notes</TableHeaderColumn>
                 </BootstrapTable>

                 

            {/* <Table striped bordered hover size="sm" responsive className="clockin-table container">
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
                </tbody>
            </Table> */}
            <Modal show={this.state.isOpen} onHide={this.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Time </Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you would like to clock out?</Modal.Body>
                <Modal.Footer>
                    <Button className="confirm-btn" onClick={ this.closeModal }>Okay</Button>
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