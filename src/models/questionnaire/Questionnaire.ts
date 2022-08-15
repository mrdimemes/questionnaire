import { Question } from "./Question";

export interface Questionnaire {
  id: number,
  label: string,
  tags: number[],
  about: string,
  questions: Question[]
}