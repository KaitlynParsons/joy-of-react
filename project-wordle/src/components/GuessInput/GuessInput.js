import React from "react";

function GuessInput({ addGuess, gameStatus }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        value={guess}
        pattern="^[A-Z]{5}$"
        maxLength={5}
        title="5 letter word."
        disabled={gameStatus}
        onChange={({ target }) => setGuess(target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
