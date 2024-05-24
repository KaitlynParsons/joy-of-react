import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner, { LostBanner, WonBanner } from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("");

  const addGuess = (guess) => {
    if (!guess) return;
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    if (guess === answer) setGameStatus("happy");
    if (nextGuesses.length === 6) setGameStatus("sad");
  };

  return (
    <>
      {gameStatus && (
        <Banner status={gameStatus}>
          {gameStatus === "happy" ? (
            <WonBanner numOfGuesses={guesses.length} />
          ) : (
            <LostBanner answer={answer} />
          )}
        </Banner>
      )}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} gameStatus={gameStatus} />
    </>
  );
}

export default Game;
