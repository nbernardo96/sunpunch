import React, { Component } from "react";
import axios from "axios";
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
    Table,
    Modal
} from 'react-bootstrap';

const handleClose = () => console.log('changes saved');

class Test extends Component {

    state = {
        isOpen: false
      };
    
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
    

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

        {/* <Modal show={true} onHide={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>                   
        </Modal> */}

        <Button variant="primary" onClick={this.openModal}>
          Launch demo modal
        </Button>

        <Modal show={this.state.isOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    

        
    </div>
    );
}

export default Test;