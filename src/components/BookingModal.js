import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function BookingModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Book an Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: '600px' }}>
        <iframe 
          src="https://calendly.com/laetitialaubscher1/virtual-coffee?month=2024-10" 
          title="Book an Appointment" 
          width="100%" 
          height="100%" 
          style={{ border: 'none' }} 
          allowFullScreen
        />
      </Modal.Body>
    </Modal>
  );
}

export default BookingModal;