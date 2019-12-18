import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export function Navigation() {

  return (
    <div >
        <Navbar bg="primary" expand="lg" variant="dark" >
          <Navbar.Brand href="#home">ALTRAN HEROES</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link to="/" activeclassname="selected">
                Home
                </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

    </div>
  );
}

