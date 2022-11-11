import { Question } from "src/models";


export type QuestionProps = {
  question: Question,
  update: (question: Question) => void,
};