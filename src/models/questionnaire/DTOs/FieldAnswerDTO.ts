class FieldAnswerDTO {
  fieldId: number;
  value: string;

  constructor(fieldId: number, value: string) {
    this.fieldId = fieldId;
    this.value = value;
  }
}

export default FieldAnswerDTO