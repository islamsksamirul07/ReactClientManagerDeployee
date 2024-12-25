import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Manues1 from "./Manues1";
import { Button } from "react-bootstrap";


const Manues=({ menuType,darkMode,toggleDarkMode,onLogout  })=>{

    return(

    <div>
      

        {/* This for employee part */}
      {menuType === 'employee' && <div>
      
        <Navbar 
            bg={darkMode ? 'dark' : 'light'} 
            variant={darkMode ? 'dark' : 'light'} 
            expand="lg"
        >
      <Container>
        <Navbar.Brand href="/" >Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/search-client" >Search Client</Nav.Link>
            <Nav.Link href="/add-client" >Add Client</Nav.Link>
            <Nav.Link href="/all-clients">All Clients</Nav.Link>
            <NavDropdown title="Other" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
                        <Button color='warning' onClick={onLogout}>Logout</Button>
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
    </div>}


{/* This is for manager part */}
    {menuType === 'manager' && <div> <Manues1 darkMode={darkMode} toggleDarkMode={toggleDarkMode} logout={onLogout}/></div>}
    
    


            </div>

        
    )
}

export default Manues;