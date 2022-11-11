import { Questionnaire, QuestionnaireChangeDTO } from "src/models";
import { QuestionnaireService } from "src/services";


export const applyChanges = (questionnaire: Questionnaire) => {
  QuestionnaireService.editQuestionnaire(
    new QuestionnaireChangeDTO(questionnaire, false),
  );
};