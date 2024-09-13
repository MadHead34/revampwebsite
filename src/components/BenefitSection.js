import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const BenefitSection = () => {
    return(
        <div className="benefit-section py-5">
            <Container className = "text-center">
                <h1 className="mb-5">Benefits</h1>
                <Row>
                    <Col md={4} className="mb-3">
                    <Image src="images/scalable.png" alt="Scalable icon" width={60} className="mb-2" />
                        <h2>Scalable</h2>
                        <p>The digital tool can help amplify the impact of 
                            in-person therapy sessions and reach more people.</p>
                    </Col>
                    <Col md={4} className="mb-3">
                    <Image src="images/Key_Icon.png" alt="Key icon" width={60} className="mb-2" />
                        <h2>Accessible</h2>
                        <p>Meeting incarcerated people at their learner levels 
                            with a mostly non-language based intervention.</p>
                    </Col>
                    <Col md={4} className="mb-3">
                    <Image src="images/Time_Icon.png" alt="Time icon" width={60} className="mb-2" />
                        <h2>On Demand</h2>
                        <p>As a digital service, the self-regulation 
                            training tool can be used at any convenient time.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="mb-3">
                    <Image src="images/BarChartData_Icon.png" alt="Bar_Chart icon" width={60} className="mb-2" />
                        <h2>Data-Driven</h2>
                        <p>Fast and accurate biodata shows real-time 
                            and longitudinal improvements in self-regulation.</p>
                    </Col>
                    <Col md={4} className="mb-3">
                    <Image src="images/Learning_Icon.png" alt="Learning icon" width={60} className="mb-2" />
                        <h2>Self-Service</h2>
                        <p>With an easy-to-use interface, the tool 
                            can be administered without a therapist present.</p>
                    </Col>
                    <Col md={4} className="mb-3">
                    <Image src="images/Statistic_Icon.png" alt="Statistic icon" width={60} className="mb-2" />
                        <h2>Evidence Based</h2>
                        <p>Biofeedback training is proven to have a positive 
                            impact on self-regulation and cognitive skills.</p>
                    </Col>
                </Row>
            </Container>
        </div>
      
    );
  }

  export default BenefitSection;