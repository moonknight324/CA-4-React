import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

// Creating a context
export const MyQuizGame = createContext();

function App() {
  // Using the useState hook for  different functionalities
  const [mode, setMode] = useState("Light");
  const [Light, setLight] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState(questions[questionNumber]);
  const [answer, setAnswer] = useState([]);
  const [finalScore, setFinalScore] = useState(0);
  const [highlightQuestion, setHighlightQuestion] = useState(false);

  // Defining the contextvalue
  const contextValue = {
    setAnswer,
    setFinalScore,
    highlightQuestion,
    setHighlightQuestion,
    finalScore,
    setLight,
    setQuestionNumber,
    setQuestion,
    mode,
    Light,
    questionNumber,
    question,
    answer,
  };

  // Funtions for setting the modes
  const handleClick = () => {
    setLight(!Light);
  };

  useEffect(() => {
    setMode(Light ? "Dark" : "Light");
  }, [Light]);

  const modeTheme = {
    backgroundColor: Light ? "lavender" : "black",
    color: Light ? "black" : "lavender",
  };

  return (
    <>
      <MyQuizGame.Provider value={contextValue}>
        <div className="App" style={modeTheme}>
          <div className="header">
            <h1>Kalvium</h1>
            <button onClick={handleClick} className="mode-btn">
              {mode}
            </button>
          </div>
          <h1 className="title">React Riddles</h1>
          {/* Using Ternary operator for the rendering of components */}
          {questionNumber < 5 ? <QuestionBox /> : <Result />}
        </div>
      </MyQuizGame.Provider>
    </>
  );
}

export default App;
