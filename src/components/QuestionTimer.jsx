import { useState, useEffect } from "react";

export default function QuestionTimer({ timeOut, onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);
  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeOut);
    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((preRemaning) => preRemaning - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <progress
      id="question-timer"
      max={timeOut}
      value={remainingTime}
      className={mode}
    />
  );
}
