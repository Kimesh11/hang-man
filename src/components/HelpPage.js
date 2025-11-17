import React from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";

// Game instructions and help.
function HelpPage({onClose}) {
    const help = (
        <Modal show onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>How to Play Hangman</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                Hangman is a classic word-guessing game. Try to guess the hidden word
                before the hangman drawing is complete!
                </p>

                <h6>Basic Rules:</h6>
                <ul>
                <li>Click letters to make a guess.</li>
                <li>If the letter is in the word, it appears in the correct spot.</li>
                <li>If the letter is not in the word, a body part is drawn.</li>
                <li>You lose if the hangman is fully drawn before guessing the word.</li>
                </ul>

                <h6>Tips & Strategy:</h6>
                <ListGroup variant="flush">
                <ListGroup.Item>Start by guessing vowels (A, E, I, O, U).</ListGroup.Item>
                <ListGroup.Item>Look for common letter patterns like “TH”, “ING”, or “ER”.</ListGroup.Item>
                <ListGroup.Item>Use the word length to your advantage — longer words give more clues.</ListGroup.Item>
                <ListGroup.Item>Don’t repeat letters you’ve already guessed.</ListGroup.Item>
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Got it!</Button>
            </Modal.Footer>
        </Modal>
    );
    return help;
}

export default HelpPage;

