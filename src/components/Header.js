import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


export default class Header extends Component {
    render(){
        return (
                <div>
                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
                />
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">About</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="See More" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">All Post</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Team</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </div>
        )
    }
}
