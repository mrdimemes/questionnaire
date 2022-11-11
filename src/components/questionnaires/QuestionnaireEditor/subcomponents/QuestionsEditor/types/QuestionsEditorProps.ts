import { Question } from "src/models";


export type QuestionsEditorProps = {
  questions: Question[],
  className?: string,
  setQuestions: (questions: Question[]) => void,
};