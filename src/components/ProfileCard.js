import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import './ProfileCard.css';

function ProfileCard({ person }) {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <Card className="profile-card">
                <div className="card-img-wrapper">
                    <Card.Img variant="top" src={person.image} className="card-img" />
                    <div className="overlay">
                        <Button variant="primary" onClick={handleShowModal}>
                            Read More
                        </Button>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text>{person.title}</Card.Text>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{person.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={person.image} alt={person.name} className="img-fluid mb-3" />
                    <p>{person.description}</p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProfileCard;