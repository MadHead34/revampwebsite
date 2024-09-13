import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function AppNavbar() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand href="#">manana</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Our Team</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }

  export default AppNavbar;