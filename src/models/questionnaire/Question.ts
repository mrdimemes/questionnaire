import { QuestionType } from "./QuestionType";
import { Field } from "./Field";

export interface Question {
  id: number,
  questionType: QuestionType,
  text: string,
  fields: Field[],
  isRequired: boolean
}