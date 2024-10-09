import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import './SubmitFormSection.css';

// Ensure ref is applied to the outermost div or container
const SubmitFormSection = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div id="contact-section" className="submit-form-section">
      <Container>
        <Row>
          <Col md={6} className="form-text">
            <h2>Contact Us</h2>
            <p>Reach out to us for any inquiries or collaborations!</p>
            <img src="/images/manana.png" alt="Manana Logo" className="logo" />

            <div className="social-icons mt-4">
              <a href="https://www.linkedin.com/company/manana" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} className="mr-3" />
              </a>
              <a href="https://www.instagram.com/manana" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={40} className="mr-3" />
              </a>
              <a href="https://www.facebook.com/manana" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={40} />
              </a>
            </div>
            
          </Col>
          <Col md={6}>
            <Form onSubmit={handleSubmit} className="submit-form">
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formSubscribe">
                <Form.Check
                  type="checkbox"
                  label="Subscribe to our newsletter"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default SubmitFormSection;