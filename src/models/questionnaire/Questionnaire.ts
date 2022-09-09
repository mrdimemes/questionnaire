import { Question } from "./";

interface Questionnaire {
  id: number,
  label: string,
  tags: number[],
  about: string,
  questions: Question[]
}

export default Questionnaire