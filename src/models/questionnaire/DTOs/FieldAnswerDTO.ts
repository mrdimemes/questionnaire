class FieldAnswerDTO {
  fieldId: number;
  value: string | boolean;

  constructor(fieldId: number, value: string | boolean) {
    this.fieldId = fieldId;
    this.value = value;
  }
}

export default FieldAnswerDTO