import { QuestionAnswerDTO, ValidationWarning } from "src/models";
import {
  checkFieldByCharset,
  checkFieldByLength,
} from "src/utils/validation/validators";
import { Charset } from "src/utils/validation/models";

const checkTextQuestion = (question: QuestionAnswerDTO) => {
  const warnings: ValidationWarning[] = [];

  question.fields.forEach(field => {
    let warning = checkFieldByLength(
      field.value,
      "" + field.fieldId,
      question.isRequired ? 1 : 0,
      200,
    );
    if (warning) { 
      warnings.push(warning); 
      warning = undefined; 
      return;
    }

    warning = checkFieldByCharset(
      field.value,
      "" + field.fieldId,
      Charset.Basic,
    );
    if (warning) { warnings.push(warning); warning = undefined; }
  });

  if (warnings.length > 0) return warnings;
};

export default checkTextQuestion;