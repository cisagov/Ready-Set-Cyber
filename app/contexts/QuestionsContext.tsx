import React, { createContext, useState, useContext, ReactNode } from "react";

import { simpleQuestion, Answer, orgQuestion } from "~/types";

interface QuestionContextType {
  questions: simpleQuestion[] | orgQuestion[];
  currentQuestionIndex: number;
  answers: Answer[];
  handleAnswer: (questionId: number, answer: Answer) => void;
}

const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined,
);

const useQuestions = () => {
  const context = useContext(QuestionContext);
  if (!context)
    throw new Error("useQuestions must be used within a Questionaire");
  return context;
};

const QuestionsProvider: React.FC<{
  questions: simpleQuestion[] | orgQuestion[];
  children: ReactNode;
}> = ({ questions, children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleAnswer = (questionId: number, answer: Answer) => {
    console.log(JSON.stringify(answers));
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answer }));
    setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
    console.log("After changing answers" + JSON.stringify(answers));
  };
  return (
    <QuestionContext.Provider
      value={{ questions, currentQuestionIndex, answers, handleAnswer }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionsProvider, useQuestions };
