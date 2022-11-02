import { ChangeAnswerActionType } from "../";

import { changeFieldValue } from "./";


export const changeTextFieldValue = (
  questionId: number,
  fieldId: number,
  value: string,
) => {
  return changeFieldValue(
    ChangeAnswerActionType.TextFieldChange,
    questionId,
    fieldId,
    value,
  );
};