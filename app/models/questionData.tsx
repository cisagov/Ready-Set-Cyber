const questionsData = [
  {
    catagoryName: "securityControls",
    question:
      "Does your organization have security controls in place that appropirately identify, authenticate, and authorize users?",
    subQuestions: [
      {
        id: 1,
        text: "Do your systems require a mini?",
        score: 3,
      },
      {
        id: 2,
        text: "Do your systems require a mega!?",
        score: 5,
      },
    ],
  },
  {
    catagoryName: "configControls",
    question:
      "Do you have device configuration policies and controls in place to manage the security, provisioning, and deployment of devices across the organization?",
    subQuestions: [
      {
        id: 1,
        text: "Do your systems require a mini?",
        score: 3,
      },
      {
        id: 2,
        text: "Do your systems require a mega!?",
        score: 5,
      },
    ],
  },
];

export default questionsData;
