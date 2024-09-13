import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './TherapySection.css'; 

function TherapySection() {
    return (
        <Container fluid className="therapy-section">
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <h2>How In-Person Therapy is Restricted in the Prison Setting</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={3} className="text-center therapy-box">
                    <div className="therapy-icon">
                        <i className="fas fa-hospital"></i> 
                    </div>
                    <h4>Low Reach</h4>
                    <p>Only 3 hours of face-to-face clinical contact on average for incarcerated individuals with mild-to-moderate mental healthcare needs per year.</p>
                </Col>
                <Col md={3} className="text-center therapy-box">
                    <div className="therapy-icon">
                        <i className="fas fa-user-shield"></i> 
                    </div>
                    <h4>Low Trust</h4>
                    <p>Building a trust-based relationship with a therapist is needed for talk therapy to be successful. This is more difficult in a low-trust environment with limited time.</p>
                </Col>
                <Col md={3} className="text-center therapy-box">
                    <div className="therapy-icon">
                        <i className="fas fa-user-alt-slash"></i> 
                    </div>
                    <h4>Inaccessible</h4>
                    <p>6/10 people in prison have low or basic literacy levels and struggle with language processing in talk therapy.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default TherapySection;