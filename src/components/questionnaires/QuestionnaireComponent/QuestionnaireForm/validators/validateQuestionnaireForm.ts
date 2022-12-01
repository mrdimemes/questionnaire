import { ValidationError } from "src/exceptions";
import { QuestionType, ValidationWarning } from "src/models";

import { checkCheckedQuestion, checkTextQuestion } from "./";

import type { QuestionnaireAnswerDTO } from "src/models";


const validateQuestionnaireForm = (answerDTO: QuestionnaireAnswerDTO) => {
  const warnings: ValidationWarning[] = [];

  answerDTO.questions.forEach(question => {
    if (question.questionType ===
      (QuestionType.Checkbox || QuestionType.Radio)
    ) {
      const fieldWarning = checkCheckedQuestion(question);
      if (fieldWarning) warnings.push(fieldWarning);
    } else if (question.questionType === QuestionType.Text) {
      const fieldWarning = checkTextQuestion(question);
      if (fieldWarning) warnings.push(...fieldWarning);
    }
  });

  if (warnings.length > 0) throw new ValidationError(warnings);
};

export default validateQuestionnaireForm;