import { Question } from "src/models";


export type QuestionsListProps = {
  questions: Question[],
  update: (question: Question, index: number) => void,
  remove: (index: number) => void,
  className?: string,
};