import React, { useContext, useEffect } from "react";
import { MyQuizGame } from "../App";
import questions from "../questions";
import GameResult from "./Result";

function QuestionBox() {
  const {
    setFinalScore,
    highlightQuestion,
    setHighlightQuestion,
    setQuestionNumber,
    setQuestion,
    setAnswer,
    questionNumber,
    question,
    answer,
  } = useContext(MyQuizGame);

  // Using the useEffect hook
  useEffect(() => {
    if (questionNumber < 5) {
      setQuestion(questions[questionNumber]);
    }
  }, [questionNumber, setQuestion]);

  // Function to handle the answers
  const handleAnswer = (selectedOption) => {
    const isCorrect = question.options[selectedOption].isCorrect;

    setFinalScore((prevScore) => prevScore + (isCorrect ? 1 : 0));
    setAnswer([
      ...answer,
      { question: questionNumber, selectedOption, isCorrect },
    ]);
    setQuestionNumber(questionNumber + 1);
  };

  if (questionNumber === 5) {
    return <GameResult />;
  }

  //function for managing the highlight and remove highlight buttons
  const handleHighlight = () => {
    setHighlightQuestion(true);
  };

  const handleRemoveHighlight = () => {
    setHighlightQuestion(false);
  };

  return (
    <div className="question-box">
      <h2>Question {questionNumber + 1} out of 5</h2>
      <h2
        className="question-text"
        style={{ color: highlightQuestion ? "red" : null }}
      >
        {question.text}
      </h2>
      {/* Logic for displaying the options */}
      {question.options.map((option, index) => (
        <p className="options" key={index} onClick={() => handleAnswer(index)}>
          {option.text}
        </p>
      ))}
      <button className="highlight" onClick={handleHighlight}>
        Highlight
      </button>
      <button className="remove" onClick={handleRemoveHighlight}>
        Remove Highlight
      </button>
    </div>
  );
}

export default QuestionBox;
