import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export function Navigation() {
  return (
    <div className="navigation">
      <Navbar bg="primary" className="navigation" expand="lg" variant="dark">
        <Navbar.Brand className="navigationBrand" href="#home">
          ALTRAN HEROES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navLink" to="/" activeclassname="selected">
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
