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
import email from '../images/email.png';

var DataTable = require('react-data-components').DataTable;

// var columns = [
//     { title: 'Date', prop: 'date'  },
//     { title: 'Clocked In', prop: 'clocked_in' },
//     { title: 'Clocked Out', prop: 'clocked_out' },
//     { title: 'Notes', prop: 'notes' }
// ];

var data = [
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' },
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' },
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' },
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' },
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' },
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' },
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' },
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' },
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' },
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' },
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' },
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' },
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' },
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' },
    { id: 1, date: 'date value', clocked_in: 'clocked in at time', clocked_out: 'clocked out at time', notes: 'notes here' }
];

// const [show, setShow] = useState(false);

  const handleClose = () => console.log('close button');
  const handleShow = () => console.log('employee clocked in');


class Dashboard extends Component {
    
    constructor(props) {
        super(props)

    }

    state = {
        isOpen: false,
        punched: ''
    };

    clockIn = () => this.setState({ isOpen: true, punched: 'Clock In' })
    clockOut = () => this.setState({ isOpen: true, punched: 'Clock Out' })
    
    closeModal = () => this.setState({ isOpen: false });

    render = () => (
        <div>
        <Navbar className="sunpunch-nav" expand="lg">
            <Navbar.Brand href="/">Sunpunch</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/" className="">Sign Out</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Container className="mt-5 ml-5 employee-info" fluid>
                <Row>
                    <Col>
                    <Image src={user} className="dashboard-icons"/> Name: 
                    {/* {this.props.user.employee_name} */}
                    </Col>
                    <Col>
                        <Button size="sm" className="clockin-btn" onClick={this.clockIn}>Clock in</Button>
                    </Col>
                    <Col>
                        <Button size="sm" className="clockout-btn" onClick={this.clockOut}>Clock out</Button>{' '}
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                    <Image src={badge} className="dashboard-icons"/> Department: 
                    {/* {this.props.user.department} */}
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Image src={email} className="dashboard-icons"/> Email: 
                        {/* {this.props.user.employee_email} */}
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

            <BootstrapTable data={data} striped hover pagination version='4' className="container clockin-table">
                <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
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
                <Modal.Title>{this.state.punched}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you would like to {this.state.punched}?</Modal.Body>
                <Modal.Footer>
                <Button className="confirm-btn" onClick={this.closeModal}>{this.state.punched}</Button>
                <Button className="cancel-btn" onClick={this.closeModal}>Cancel</Button>
                </Modal.Footer>
            </Modal>

        <footer className="footer py-3">
            <div className="attributions">
                <div>Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a>, <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>, and <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
        </footer>

    </div>
    );
}

export default Dashboard;