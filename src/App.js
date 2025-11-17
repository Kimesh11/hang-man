import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import DisplayWords from "./components/DisplayWords";
import HelpPage from "./components/HelpPage";
import Keyboard from "./components/Keyboard";
import HangmanFigure from "./components/HangManFigure";
import { Container, Button, Nav, Card } from "react-bootstrap";

function App() {
  // State variables.
  const [gameStarted, setGameStarted] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wordToGuess, setWordToGuess] = useState("react");
  const maxGuesses = 11;
  const [gameResult, setGameResult] = useState(null); // 'win', 'lose', or null

  const startGame = async () => {
    try {
      // Fetching the dictionary file.
      const response = await fetch(`${process.env.PUBLIC_URL}/dictionary.txt`);
      const text = await response.text();

      // Split into an array. In the file each line has 1 word.
      const words = text.split(/\r?\n/).filter(Boolean);

      const randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
      setGameStarted(true);
      setWrongGuesses(0);
      setGuessedLetters([]);
      setWordToGuess(randomWord);
      setGameResult(null);
    } catch (e) {
      console.log("Error loading dictionary.txt: " + e);
    }
  };
  const openHelp = () => setShowHelp(true);
  const closeHelp = () => setShowHelp(false);

  const handleClick = (letter) => {
    const lowerLetter = letter.toLowerCase();

    // Stops input if player already guessed or game has ended.
    if (guessedLetters.includes(lowerLetter) || gameResult) return;

    // Avoid duplicates
    if (guessedLetters.includes(lowerLetter)) {
      return;
    }

    const newGuessedLetters = [...guessedLetters, lowerLetter];
    // setGuessedLetters(newGuessedLetters);

    // Check if correct.
    const isCorrect = wordToGuess.includes(lowerLetter);
    let nextWrong = isCorrect ? wrongGuesses : wrongGuesses + 1;

    // Check for win
    const allLettersGuessed = wordToGuess.split("").every((letter) => newGuessedLetters.includes(letter));

    if (allLettersGuessed) {
      setGuessedLetters(newGuessedLetters);
      setGameResult("win");
      return;
    }

    // Check for lose
    if (nextWrong >= maxGuesses) {
      setWrongGuesses(nextWrong);
      setGuessedLetters(newGuessedLetters);
      setGameResult("lose");
      return;
    }
    setGuessedLetters(newGuessedLetters);
    setWrongGuesses(nextWrong);
  };

  const main = (
    <Container className="text-center mt-4">
      <Header />
      {/* Navigation bar */}
      <Nav className="justify-content-center mb-3">
        <Nav.Item>
          <Nav.Link onClick={openHelp}>Help</Nav.Link>
        </Nav.Item>
      </Nav>
      {/* Render the help page based on condition */}
      {showHelp && <HelpPage onClose={closeHelp} />}

      {/* Start the game */}
      {!gameStarted ? (
        <div>
          <p>Welcome to HANGMAN! Click start game to begin hanging.</p>
          <Button variant="primary" onClick={startGame}>
            Start Game
          </Button>
        </div>
      ) : (
        <div>
          {gameResult && (
            <>
              <Card className="mt-4 p-3 shadow-sm">
                <Card.Body>
                  {gameResult === "win" ? (
                    <h4 style={{ color: "green" }}>🎉 You Won!</h4>
                  ) : (
                    <>
                      <h4 style={{ color: "red" }}>💀 You Lost!</h4>
                      <p>
                        The correct word was: <strong>{wordToGuess}</strong>
                      </p>
                    </>
                  )}
                </Card.Body>
              </Card>
              <Button variant="outline-primary" className="mt-3" onClick={startGame}>
                Play Again
              </Button>
            </>
          )}
          <HangmanFigure wrongGuesses={wrongGuesses} />
          <DisplayWords word={wordToGuess} guessedLetters={guessedLetters} />
          <Keyboard guessedLetters={guessedLetters} onLetterClick={handleClick} />
        </div>
      )}
    </Container>
  );
  return main;
}

export default App;
