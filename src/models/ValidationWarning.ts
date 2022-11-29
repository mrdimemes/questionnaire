class ValidationWarning {
  fieldName: string;
  fieldValue: string;
  message: string;

  constructor(fieldName: string, fieldValue: string, message: string) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
    this.message = message;
  };
};

export default ValidationWarning;