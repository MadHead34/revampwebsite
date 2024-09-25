import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; 

function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs="auto">
            <div className="footer-logo">
              <span>manana</span><span className="footer-logo-triangle">▲</span>
            </div>
          </Col>
          <Col xs="auto">
          <a href="#" className="privacy-link" onClick={handleShow}>
    Privacy Policy
  </a>
              <span> | </span>
              <span>Copyright Manana 2024</span>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>INTRODUCTION</h5>
          <p>Manana Games Ltd. complies with the New Zealand Privacy Act 2020 (the Act)...</p>
          <h5>CHANGES TO THIS POLICY</h5>
          <p>We may change this policy by uploading a revised policy onto the website...</p>
          <h5>WHO DO WE COLLECT YOUR PERSONAL INFORMATION FROM</h5>
          <p>We collect personal information about you from...</p>
          {/* Add the rest of your Privacy Policy text here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
}

export default Footer;