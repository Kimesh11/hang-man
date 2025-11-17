import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Header
function Header() {
    const head = (
    <Container className="text-center my-4">
      <Row>
        <Col>
          <h1 style={{ fontWeight: "bold", color: "#0d6efd" }}>Hangman Game</h1>
          <p className="text-muted">
            Guess the word before the hangman is complete!
          </p>
        </Col>
      </Row>
    </Container>
    );
    return head;
}

export default Header;