import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from './ProfileCard';

const people = [
    {
        name: 'Laetitia Laubscher',
        title: 'Director',
        image: 'images/laetitia.png', 
        description: 'Project Manager with international experience...'
    },
    {
        name: 'Dr. John Muñoz',
        title: 'Research Scientist',
        image: 'images/laetitia.png',
        description: 'Dr. John Muñoz is a research scientist with...'
    },
    {
        name: 'Nicholas Fortugno',
        title: 'Game Designer',
        image: 'images/laetitia.png',
        description: 'Nicholas Fortugno is an experienced game designer...'
    }
];

// Applying the ref to the outermost container (Container in this case)
const PeopleSection = React.forwardRef((props, ref) =>  {
    return (
        <Container id="people-section">
            <h2 className="text-center">People</h2>
            <Row>
                {people.map((person, index) => (
                    <Col md={4} key={index}>
                        <ProfileCard person={person} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
});

export default PeopleSection;