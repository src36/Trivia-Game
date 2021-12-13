import React, { useContext } from "react";
import { QuizContext } from "../context";

const AnswerCard = () => {
  const data = useContext(QuizContext);
  const { userAnswer, setUserAnswer, checkAnswer } = data;

  return (
    <div className="ansContainer">
      <input
        type="text"
        placeholder=" Answer..."
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Submit</button>
    </div>
  );
};

export default AnswerCard;
