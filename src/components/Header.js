import React from "react";
import {Button, Container} from 'react-bootstrap';

function Header() {
    return (
      <div className="header-section text-center text-white d-flex align-items-center">
        <Container>
          <h1 className="display-4">Reducing harm by building resilience</h1>
          <p className="lead text-white">
            Helping people in prison learn self de-escalation skills in a safe, gamified way to reduce violence.
          </p>
          <Button variant="primary" className="mt-3">Get Updates</Button>
        </Container>
      </div>
    );
  }

  export default Header;