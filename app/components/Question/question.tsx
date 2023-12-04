import React from "react";

import { useQuestions } from "~/contexts/QuestionsContext";

const Question: React.FC = () => {
  const { questions, currentQuestionIndex, handleAnswer } = useQuestions();

  if (currentQuestionIndex >= questions.length) {
    return <div>Complete Go To results!</div>;
  }

  const question = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col">
      <p>{question.text}</p>
      <div className="flex flex-col">
        {question.type === "yes/no" ? (
          <div className="flex divide-y divide-gray-100 justify-between gap-x-6 py-5">
            <button
              onClick={() => handleAnswer(question.id, true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  "
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer(question.id, false)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 "
            >
              No
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            {question.options!.map((option) => {
              return (
                <button
                  className="text-white text-center bg-blue-500 hover:bg-blue-700 px-4 py-2 m-2"
                  onClick={() => handleAnswer(question.id, option)}
                  key={option}
                >
                  {option}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
