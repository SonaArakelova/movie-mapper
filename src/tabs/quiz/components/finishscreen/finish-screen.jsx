

import React, { useContext, useMemo, useEffect } from "react";
import { QuizContext } from "../../context/quiz-context";
import confetti from "canvas-confetti"; 
import "./finish-screen.css";

const getEmojiIcon = (percentage) => {
  let emoji;

  if (percentage === 100) emoji = "🤩";
  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "😎";
  if (percentage >= 0 && percentage < 50) emoji = "😬";
  if (percentage === 0) emoji = "🫣 You better practice more";

  return emoji;
};

export const FinishScreen = () => {
  const { points, maxPossiblePoints, dispatch } = useContext(QuizContext);

  const percentage = useMemo(() => (points / maxPossiblePoints) * 100, [
    maxPossiblePoints,
    points,
  ]);

  useEffect(() => {
    if (percentage === 100) {
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [percentage]);

  const emoji = getEmojiIcon(percentage);

  return (
    <div className="d-flex align-items-center justify-content-center flex-column" style={{ height: '500px' }}>
      <p className="result ">
        <span>
          <span>{emoji}</span> Your Score is {points} out of {maxPossiblePoints}
        </span>
      </p>
      <button
        className="btn btn-primary height"
        onClick={() =>
          dispatch({
            type: "RESTART",
          })
        }
      >
        Restart 
      </button>
    </div>
  );
};
