import React, { useContext } from "react";
import { MyQuizGame } from "../App";
import "../App.css";

function GameResult() {
  // Using the useContext hook
  const { setQuestionNumber, setFinalScore, answer, setAnswer } =
    useContext(MyQuizGame);

  // Function to restart the game by using useState
  const restartGame = () => {
    setAnswer([]);
    setQuestionNumber(0);
    setFinalScore(0);
  };

  // Defining the logic for calculating the answers using for of loop
  let correctAns = 0;
  for (const item of answer) {
    if (item.isCorrect) {
      correctAns++;
    }
  }

  return (
    <div className="results">
      <h2 className="final-score">Final Results</h2>
      <p className="score">
        {/* Logic for calculating the score percentage  */}
        {correctAns} out of 5 correct - {correctAns * 20}%
      </p>
      <button className="restart-btn" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}

export default GameResult;
