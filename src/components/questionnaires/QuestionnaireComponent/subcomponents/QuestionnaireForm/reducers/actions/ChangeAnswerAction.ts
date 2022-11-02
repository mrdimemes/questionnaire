import { ChangeAnswerActionType, ChangeAnswerActionPayload } from "./";


class ChangeAnswerAction {
  type: ChangeAnswerActionType;
  payload: ChangeAnswerActionPayload;

  constructor(
    type: ChangeAnswerActionType,
    payload: ChangeAnswerActionPayload,
  ) {
    this.type = type;
    this.payload = payload;
  };
};

export default ChangeAnswerAction;