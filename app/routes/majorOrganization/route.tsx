import Question from "~/components/Question/question";
import { QuestionsProvider } from "~/contexts/QuestionsContext";

import questions from "../../models/organizationQuestionData";
function advancedQuestionairre() {
  return (
    <div className="flex items-center text-3xl justify-center">
      <QuestionsProvider questions={questions}>
        <Question />
      </QuestionsProvider>
    </div>
  );
}

export default advancedQuestionairre;
