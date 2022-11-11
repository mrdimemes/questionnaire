import { Questionnaire, QuestionnaireChangeDTO } from "src/models";
import { QuestionnaireService } from "src/services";
import { executeWithConfirmation } from "src/utils/helpers";


export const applyCriticalChanges = (
  questionnaire: Questionnaire,
) => {
  executeWithConfirmation(
    "Старая статистика будет потеряна. Продолжить?",
    () => QuestionnaireService.editQuestionnaire(
      new QuestionnaireChangeDTO(questionnaire, true),
    ),
  );
};