import { ChangeAnswerActionType } from "../";

import { changeFieldValue } from "./";


export const changeCheckboxFieldValue = (
  questionId: number,
  fieldId: number,
  value: string,
) => {
  return changeFieldValue(
    ChangeAnswerActionType.CheckboxFieldChange,
    questionId,
    fieldId,
    value,
  );
};