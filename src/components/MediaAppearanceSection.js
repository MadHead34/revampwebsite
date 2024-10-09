import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MediaAppearanceSection.css'; 

const MediaAppearanceSection = () => {
  return (
    <Container className="media-appearance-section">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={10} lg={8}>
          <div className="video-wrapper">
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/QV5ZBuNJMx0?si=fC5f5WnpgTXG7ShY"
              title="Media Appearance"
              allow="autoplay"
            ></iframe>
            <div className="overlay-text">Media Appearance on TVNZ Breakfast</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MediaAppearanceSection;