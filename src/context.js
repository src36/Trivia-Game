import React, { createContext, useState, useEffect } from "react";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState("");
  const [number, setNumber] = useState(1);
  const [answer, setAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const getData = async () => {
    setLoading(true);
    let response = await fetch("https://jservice.io/api/random");
    let result = await response.json();
    setQuestion(result[0].question);
    setAnswer(result[0].answer);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const checkAnswer = () => {
    if (answer === userAnswer) {
      alert("Congratulations Right Answer, Keep it Up 😀");
      setScore(score + 1);
      setCorrect(correct + 1);
    } else {
      alert("Sorry Wrong Answer, Try Again 🙁");
      setScore(score - 0.25);
      setIncorrect(incorrect + 1);
    }
    getData();
    setUserAnswer("");
    setNumber(number + 1);
  };
  return (
    <QuizContext.Provider
      value={{
        loading,
        question,
        number,
        answer,
        userAnswer,
        setUserAnswer,
        score,
        checkAnswer,
        correct,
        incorrect,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizProvider };
