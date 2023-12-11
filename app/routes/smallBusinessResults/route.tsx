import { useQuestions } from "~/contexts/QuestionsContext";

export default function SmallBusinessResultScreen() {
  const { answers } = useQuestions();
  console.log(JSON.stringify(answers));

  return (
    <div>
      <h1>Feedback Results</h1>
      <div>
        {Object.entries(answers).map(([questionId, answer], index) => (
          <div key={index}>
            Question ID: {questionId}, Answer: {answer.toString()}
          </div>
        ))}
      </div>
    </div>
  );
}
