import { ChangeAnswerActionType } from "./actions";

import type { ChangeAnswerAction } from "./actions";
import type { AnswersMap } from "../types";


export function answersReducer(state: AnswersMap, action: ChangeAnswerAction) {
  const { questionId, fieldId, value } = action.payload;
  const questionMap = state.get(questionId) ?? new Map<number, string>();

  if (action.type === ChangeAnswerActionType.RadioFieldChange) {
    for (const id of questionMap.keys()) {
      questionMap.set(id, "false");
    };
  };

  const updatedQuestionMap = new Map(questionMap.set(fieldId, value));
  return new Map(state.set(questionId, updatedQuestionMap));
};