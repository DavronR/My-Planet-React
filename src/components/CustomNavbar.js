import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/planets" style={{ color: 'white' }}>Planets</Nav.Link>
                    <Nav.Link as={NavLink} to="/latest-trivias" style={{ color: 'white' }}>Latest User Trivias</Nav.Link>
                    <Nav.Link as={NavLink} to="/add-trivia" style={{ color: 'white' }}>Add Trivia</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact" style={{ color: 'white' }}>Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;
