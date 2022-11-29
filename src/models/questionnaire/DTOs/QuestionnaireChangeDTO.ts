import Questionnaire from "../Questionnaire";

class QuestionnaireChangeDTO {
  questionnaire: Questionnaire;

  constructor(questionnaire: Questionnaire) {
    this.questionnaire = questionnaire;
  }
}

export default QuestionnaireChangeDTO;