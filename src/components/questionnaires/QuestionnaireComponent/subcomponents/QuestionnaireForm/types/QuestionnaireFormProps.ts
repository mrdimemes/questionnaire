import { Question } from "src/models";


export type QuestionnaireFormProps = {
  questionnaireId: number,
  questions: Question[],
};