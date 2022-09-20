import { QuestionAnswerDTO } from "./";

class QuestionnaireAnswerDTO {
  questionnaireId: number;
  questions: QuestionAnswerDTO[];

  constructor(questionnaireId: number, questions: QuestionAnswerDTO[]) {
    this.questionnaireId = questionnaireId;
    this.questions = questions;
  }
}

export default QuestionnaireAnswerDTO