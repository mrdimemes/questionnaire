class ChangeAnswerActionPayload  {
  questionId: number;
  fieldId: number;
  value: string;

  constructor(questionId: number, fieldId: number, value: string) {
    this.questionId = questionId;
    this.fieldId = fieldId;
    this.value = value;
  };
};

export default ChangeAnswerActionPayload;