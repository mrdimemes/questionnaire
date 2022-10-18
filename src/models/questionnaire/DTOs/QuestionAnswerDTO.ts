import { QuestionType } from "../";

import { FieldAnswerDTO } from "./";


class QuestionAnswerDTO {
  questionId: number;
  questionType: QuestionType;
  fields: FieldAnswerDTO[];
  isRequired: boolean;

  constructor(
    questionId: number,
    questionType: QuestionType,
    fields: FieldAnswerDTO[],
    isRequired: boolean,
  ) {
    this.questionId = questionId;
    this.questionType = questionType;
    this.fields = fields;
    this.isRequired = isRequired;
  }
}

export default QuestionAnswerDTO;