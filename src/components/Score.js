import React, { useContext } from "react";
import { QuizContext } from "../context";

const Score = () => {
  const data = useContext(QuizContext);
  const { score, correct, incorrect } = data;
  return (
    <ul>
      <li>Score= {score}</li>
      <li>Total Questions= {correct + incorrect}</li>
      <li>Correct = {correct}</li>
      <li>Incorrect = {incorrect}</li>
    </ul>
  );
};

export default Score;
