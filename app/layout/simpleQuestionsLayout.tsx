import React, { ReactNode } from "react";

import { QuestionsProvider } from "~/contexts/QuestionsContext";

import questions from "../models/simpleQuestionData";

interface QuestionsLayoutProps {
  children: ReactNode;
}

const QuestionsLayout: React.FC<QuestionsLayoutProps> = ({ children }) => {
  return (
    <QuestionsProvider questions={questions}>
      <div className="flex items-center text-3xl justify-center">
        {children}
      </div>
    </QuestionsProvider>
  );
};

export default QuestionsLayout;
