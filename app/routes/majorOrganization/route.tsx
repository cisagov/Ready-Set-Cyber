import { useState } from "react";

import Question from "~/components/Question/question";
import { QuestionsProvider } from "~/contexts/QuestionsContext";

import questions from "../../models/iamQuestionData";
import SmallBusinessResultScreen from "../smallBusinessResults/route";

function advancedQuestionairre() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showResults, setShowResults] = useState(false);
  return (
    <div className="flex items-center text-3xl justify-center">
      <QuestionsProvider questions={questions}>
        <Question setShowResults={setShowResults} />
        {showResults ? <SmallBusinessResultScreen /> : null}
      </QuestionsProvider>
    </div>
  );
}

export default advancedQuestionairre;
