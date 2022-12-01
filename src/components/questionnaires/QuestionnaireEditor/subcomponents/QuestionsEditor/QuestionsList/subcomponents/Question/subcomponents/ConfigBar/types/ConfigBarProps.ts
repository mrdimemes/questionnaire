import { QuestionType } from "src/models";

export type ConfigBarProps = {
  setQuestionType: (questionType: QuestionType) => void,
  setIsRequired: (isRequired: boolean) => void,
  isRequired: boolean,
};