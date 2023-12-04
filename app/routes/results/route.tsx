import { useFeedback } from "~/root";

export default function ResultScreen() {
  const { feedback } = useFeedback();
  let message;
  if (feedback.includes("great")) {
    message = <p>Thanks for your positive feedback!</p>;
  } else if (feedback.includes("okay")) {
    message = <p>Thanks! Were always looking to improve.</p>;
  } else {
    message = <p>Weare sorry to hear that. We will work on it!</p>;
  }
  return (
    <div>
      <h1>Feedback Results</h1>
      {message}
    </div>
  );
}
