import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import CircularProgressBar from './CircularProgressBar';

const StatsSection = () => {
  return (
    <div className="stats-section py-5">
      <Container className="text-center">
        <h2 className="mb-4">Emotional dysregulation is a key driver for violent reoffending.</h2>
        <Row>
          <Col md={4} className="mb-3">
            <CircularProgressBar percentage={60} number="6/10" />
            <Image src="images/Prison_Icon.png" alt="Prison icon" width={60} className="mb-2" />
            <p>people released from prison are reconvicted within 2 years</p>
          </Col>
          <Col md={4} className="mb-3">
            <CircularProgressBar percentage={80} number="80%" />
            <Image src="images/Handcuffs.png" alt="Handcuffs icon" width={60} className="mb-2" />
            <p>of the prison population have violence in their offending histories</p>
          </Col>
          <Col md={4} className="mb-3">
            <CircularProgressBar percentage={33} number="1/3" />
            <Image src="images/AnxietyIcon.png" alt="Brain icon" width={60} className="mb-2" />
            <p>of violent reoffending risk factors are linked to dysregulation</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StatsSection;