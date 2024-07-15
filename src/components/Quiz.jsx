import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswer] = useState([]);
  const activeQuestion = userAnswers.length;
  const isComplete = activeQuestion === QUESTIONS.length;

  const handleClick = useCallback(function handleClick(selectedAnswer) {
    setUserAnswer((preUserAnswers) => {
      return [...preUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkip = useCallback(() => handleClick(null), [handleClick]);

  if (isComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestion}
        index={activeQuestion}
        onSelectAnswer={handleClick}
        onSkipAnswer={handleSkip}
      />
    </div>
  );
}
