import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './BalanceSection.css';

const BalanceSection = () => {
  return (
    <Container fluid className="balance-section">
      <Row>
        <Col xs={12} md={2} className="d-flex align-items-center justify-content-center flex-column logo-section">
          <div className="m-logo">
            <span className="logo-text">m</span>
            <div className="triangle"></div>
          </div>
          <div className="vertical-line"></div>
        </Col>
        <Col xs={12} md={10} className="content-section">
          <h2>Balancing Costs, Safety, and Rehabilitation</h2>
          <p>
            Globally, governments are grappling with the immense financial strain caused by growing prison populations, 
            striving to balance public safety, security, and a humane response to crime. Correctional agencies are 
            trialling many initiatives to cut costs while trying to maintain safety and improve reintegration.
          </p>
          <p>
            The Principle of Normality is the leading concept in the development of national and international standards 
            and guidelines to improve prisoner rights, wellbeing, and rehabilitation, leading to a reduction in the 
            incarceration rate and creating safer prisons in the process. Central to this effort is leveraging digital 
            transformation to alleviate the burden on prison staff, cut costs, and enhance existing rehabilitation programs.
          </p>
          <p>
            Built in close collaboration with correctional professionals and international subject-matter experts, 
            Manana is developing an evidence-based solution that teaches people how to better regulate their emotions, 
            improving behavioural outcomes and wellbeing while reducing reoffending and creating safer prisons.
          </p>
          <Button variant="success" className="request-button">Request White Paper</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BalanceSection;