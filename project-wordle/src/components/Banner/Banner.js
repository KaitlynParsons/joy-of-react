import React from "react";

export const WonBanner = ({ numOfGuesses }) => {
  return (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>
        {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
      </strong>
      .
    </p>
  );
};

export const LostBanner = ({ answer }) => {
  return (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );
};

function Banner({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default Banner;
