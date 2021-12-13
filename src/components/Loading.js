import React, { useContext } from "react";
import { QuizContext } from "../context";

const Loading = () => {
  const data = useContext(QuizContext);
  const { loading } = data;
  if (loading) {
    return <h3>Loading question...</h3>;
  }
  return <div>{loading}</div>;
};

export default Loading;
