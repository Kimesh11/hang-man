import React from "react";
import { Image } from "react-bootstrap";

// Draws the hang-man.
function HangmanFigure({wrongGuesses}) {
    const maxChance = 11;
    const step = Math.min(wrongGuesses + 1, maxChance);

    // Referencing the pics from the public folder.
    const imagePath = `${process.env.PUBLIC_URL}/hangman/state${step}.GIF`;
    console.log({imagePath});

    const figure = (
        <div className="text-center mt-4">
            <Image
                src={imagePath}
                alt={`Hangman step ${step}`}
                fluid
                style={{
                maxWidth: "280px",
                borderRadius: "10px",
                border: "2px solid #ccc",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
            />
            <p className="mt-2 text-muted">
                Wrong guesses: {wrongGuesses} / {maxChance}
            </p>
        </div>
    );
    return figure;
}

export default HangmanFigure;