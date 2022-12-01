import { QuestionType } from "src/models";

import { CheckboxField, RadioField, TextField } from "../fields";


export const getFieldComponent = (questionType: QuestionType) => {
  switch (questionType) {
    case QuestionType.Checkbox:
      return CheckboxField;
    case QuestionType.Radio:
      return RadioField;
    default:
      return TextField;
  };
};