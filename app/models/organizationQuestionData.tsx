import { orgQuestion } from "~/types";

const options = ["Implemented", "In Progress", "Scoped", "Not Started"];

const organizationQuestionsData: orgQuestion[] = [
  {
    id: 1,
    text: "Are you a small business?",
    type: "cpg",
    options: options,
  },
  {
    id: 2,
    text: "Do you employ others than youself?",
    type: "cpg",
    options: options,
  },
  {
    id: 3,
    text: "Is your work password different from your personal password?",
    type: "cpg",
    options: options,
  },
];

export default organizationQuestionsData;
