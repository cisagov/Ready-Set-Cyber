export type Answer = boolean | string;

export interface simpleQuestion {
  id: number;
  text: string;
  type: "yes/no" | "multi-select";
  definintions?: string;
  options?: string[];
  resource?: string;
  resourceDesc?: string;
}

export interface orgQuestion {
  id: number;
  text: string;
  type: "cpg";
  options: string[];
  level?: number;
  resource?: string;
  resourceText?: string;
  resDesc?: string;
  secondResource?: string;
  secondResourceText?: string;
  secondResDesc?: string;
}

export interface answers {
  answer: Answer[];
}
