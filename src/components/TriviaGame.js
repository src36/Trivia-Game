import React from "react";
import AnswerCard from "./AnswerCard";
import Loading from "./Loading";
import QuestionCard from "./QuestionCard";
import Score from "./Score";

const TriviaGame = () => {
  return (
    <div className="container">
      <h1>Trivia Game</h1>
      <Loading />
      <Score />
      <QuestionCard />
      <AnswerCard />
    </div>
  );
};

export default TriviaGame;
