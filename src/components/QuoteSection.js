import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './QuoteSection.css'; 

function QuoteSection() {
    return (
        <Container fluid className="quote-section">
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="quote-box">
                        <p className="quote-text">"...such an innovative tool to help with the reintegration of those serving time in prison. It is such a critical opportunity to turn people’s lives around and help them become good citizens, and also to prevent more victims in our community.”</p>
                        <p className="quote-author">Anne Tolley, former Minister of Corrections commenting on Manana</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default QuoteSection;