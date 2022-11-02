import {
  ChangeAnswerAction,
  ChangeAnswerActionType,
  ChangeAnswerActionPayload,
} from "../";


export const changeFieldValue = (
  actionType: ChangeAnswerActionType,
  questionId: number,
  fieldId: number,
  value: string,
) => {
  return new ChangeAnswerAction(
    actionType,
    new ChangeAnswerActionPayload(questionId, fieldId, value),
  );
};