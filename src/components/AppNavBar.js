import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import BookingModal from './BookingModal';

function AppNavbar({ onScrollToTeam, onScrollToContact }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#">manana</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link onClick={onScrollToTeam}>Our Team</Nav.Link>
            <Nav.Link onClick={onScrollToContact}>Contact Us</Nav.Link>
            <Nav.Link onClick={handleShowModal}>Book an Appointment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <BookingModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
}

export default AppNavbar;