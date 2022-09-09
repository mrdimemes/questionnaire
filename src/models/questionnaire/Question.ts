import { QuestionType, Field } from "./";

interface Question {
  id: number,
  questionType: QuestionType,
  text: string,
  fields: Field[],
  isRequired: boolean
}

export default Question