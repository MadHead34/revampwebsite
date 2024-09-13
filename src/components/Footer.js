import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; 

function Footer() {
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
            <div className="footer-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <span> | </span>
              <span>Copyright Manana 2024</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;