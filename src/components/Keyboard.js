import React from "react";
import { Button, Row, Col } from "react-bootstrap";

// Keyboard.
function Keyboard({guessedLetters, onLetterClick}) {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const keys = (
        <Row className="justify-content-center">
            {alphabets.map((letter, index) => {
                const isGuessedLetter = guessedLetters.includes(letter.toLowerCase());
                return (
                    <Col xs="auto" key={index} className="mb-2">
                        <Button variant={isGuessedLetter ? "secondary" : "outline-primary"}
                        onClick={() => onLetterClick(letter)} disabled={isGuessedLetter}
                        style={{ width: "40px", height: "40px" }}>{letter}</Button>
                    </Col>
                );
            })}
        </Row>
    );
    return keys;
}

export default Keyboard;