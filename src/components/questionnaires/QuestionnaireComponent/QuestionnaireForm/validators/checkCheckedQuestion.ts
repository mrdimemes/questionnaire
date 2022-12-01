import { QuestionAnswerDTO, ValidationWarning } from "src/models";


const checkCheckedQuestion = (question: QuestionAnswerDTO) => {
  let isChecked = false;
  let warning: ValidationWarning | undefined;

  question.fields.forEach(field => {
    if (field.value === "true") isChecked = true;
    if (field.value !== "false" && field.value !== "true") {
      warning = new ValidationWarning(
        "" + field.fieldId,
        field.value,
        "Некорректное значение",
      );
      return;
    };
  });

  if (warning) return warning;
  if (question.isRequired && !isChecked) return new ValidationWarning(
    "" + question.questionId,
    "",
    "Обязательный вопрос без ответа",
  );


};

export default checkCheckedQuestion;