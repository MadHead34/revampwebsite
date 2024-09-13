import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";

function DataDrivenSection () {
    return(
        <Container>
            <h3>A Data Driven Intervention to Help Build Self-Calming Skills </h3>
            <br></br>
            <p>Manana’s stress management tool trains meditative, deep breathing while undertaking safe, gamified, emotion-inducing tasks. Data from a person’s wearable creates a positive, 
                digital feedback loop, rewarding them for staying calm and focused when challenged.</p>
            <Row>
                <Col>
                    <img src="images/Screen1.png" alt="Screen1"  className="img-fluid mb-3" />
                    <img src="images/Belt.png" alt="Belt"  className="img-fluid mb-3" />
                </Col>
                <Col>
                    <img src="images/Screen2.png" alt="Screen2"  className="img-fluid mb-3" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Manana is conducting an in-prison pilot in 2024, with support from researchers 
                        at the University of Auckland.</p>
                </Col>
                <Col>
                    <img src="images/Auck_Uni_Logo.png" alt="Auck_Uni_Logo"  className="img-fluid mb-3" />
                </Col>
            </Row>
            <div className="text-center">
                <Button variant="primary" className="mt-3">Request a Demo</Button>
            </div>
            
        </Container>
    );
}

export default DataDrivenSection;