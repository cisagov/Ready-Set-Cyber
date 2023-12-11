import { useState } from "react";

import Question from "~/components/Question/question";
import SimpleQuestionsLayout from "~/layout/simpleQuestionsLayout";

import SmallBusinessResultScreen from "../smallBusinessResults/route";

function SimpleQuestionairre() {
  const [showResults, setShowResults] = useState(false);
  return (
    <div className="flex items-center text-3xl justify-center">
      <SimpleQuestionsLayout>
        {!showResults ? <Question setShowResults={setShowResults} /> : null}
        {showResults ? <SmallBusinessResultScreen /> : null}
      </SimpleQuestionsLayout>
    </div>
  );
}

export default SimpleQuestionairre;
