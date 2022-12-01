import { ChangeAnswerActionType } from "../";

import { changeFieldValue } from "./";


export const changeRadioFieldValue = (
  questionId: number,
  fieldId: number,
  isChecked: boolean,
) => {
  return changeFieldValue(
    ChangeAnswerActionType.RadioFieldChange,
    questionId,
    fieldId,
    "" + isChecked,
  );
};