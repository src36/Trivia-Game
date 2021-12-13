import React, { useContext } from "react";
import { QuizContext } from "../context";

const QuestionCard = () => {
  const data = useContext(QuizContext);
  const { question, number } = data;
  return (
    <div className="questionContainer">
      <h2>
        {" "}
        <span>Que No:-[{number}]</span> {"  "}
        {question}
      </h2>
    </div>
  );
};

export default QuestionCard;
