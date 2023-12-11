import { orgQuestion } from "~/types";

const options = ["Implemented", "In Progress", "Scoped", "Not Started"];

const iamQuestionsData: orgQuestion[] = [
  {
    id: 1,
    text: "Does your organization have security controls in place that appropriately identify, authenticate, and authorize users?",
    type: "cpg",
    options: options,
    resource: "https://www.youtube.com/watch?v=FZoB7yUGh7Y",
    resourceText: "Video: Strong Passwords (Youtube)",
  },
  {
    id: 2,
    text: "Do your systems require a minimum password length of 15 characters (including OT systems, where technically feasible)?",
    type: "cpg",
    options: options,
  },
  {
    id: 3,
    text: "Do you log all unsuccessful login attempts and provide securiyt teams with alerts if a certain number of unsuccessful logins occur over a short period of time?",
    type: "cpg",
    options: options,
  },
];

export default iamQuestionsData;
