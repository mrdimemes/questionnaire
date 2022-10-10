import Questionnaire from "../Questionnaire";

class QuestionnaireChangeDTO {
  questionnaire: Questionnaire;
  isCritical: boolean;

  constructor(questionnaire: Questionnaire, isCritical: boolean) {
    this.questionnaire = questionnaire;
    this.isCritical = isCritical;
  }
}

export default QuestionnaireChangeDTO