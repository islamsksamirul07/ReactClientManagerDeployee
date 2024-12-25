import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';

function Manues1({ darkMode, toggleDarkMode, logout }) {
    return (
        <Navbar 
            bg={darkMode ? 'dark' : 'light'} 
            variant={darkMode ? 'dark' : 'light'} 
            expand="lg"
        >
            <Container>
                <Navbar.Brand href="/home-admin">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/all-admin">All</Nav.Link>
                        <Nav.Link href="/search-admin">Search</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ms-auto">
                        <Button color='warning' onClick={logout}>Logout</Button>
                        <Button 
                            onClick={toggleDarkMode} 
                            variant={darkMode ? 'light' : 'dark'}
                        >
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Manues1;
