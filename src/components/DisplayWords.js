import def from "ajv/dist/vocabularies/discriminator";
import React from "react";
import { Row, Col } from "react-bootstrap";

// Displays the words.
function DisplayWords({ guessedLetters, word }) {
  const display = (
    <Row className="justify-content-center mb-4">
      {word.split("").map((letter, index) => (
        <Col key={index} xs="auto" className="text-center border-bottom mx-1" style={{ minWidth: "25px", fontSize: "24px", fontWeight: "bold" }}>
          {guessedLetters.includes(letter.toLowerCase()) ? letter.toUpperCase() : "_"}
        </Col>
      ))}
    </Row>
  );
  return display;
}

export default DisplayWords;
