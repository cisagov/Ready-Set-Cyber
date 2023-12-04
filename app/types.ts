export type Answer = boolean | string;

export interface simpleQuestion {
  id: number;
  text: string;
  type: "yes/no" | "multi-select";
  options?: string[];
  resource?: string;
}

export interface orgQuestion {
  id: number;
  text: string;
  type: "cpg";
  options: string[];
}

export type simpleAnswers = Record<number, Answer>;
