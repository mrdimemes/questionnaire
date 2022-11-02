import { ValidationWarning } from "src/models";


const checkFieldByLength = (
  fieldValue: string,
  fieldName: string,
  minLength: number,
  maxLength: number,
  isRequired: boolean = true,
) => {
  if (isRequired && fieldValue.length === 0) {
    return new ValidationWarning(
      fieldName, fieldValue, "Поле не может быть пустым",
    );
  }
  if (fieldValue.length < minLength) {
    return new ValidationWarning(
      fieldName, fieldValue, "Слишком короткое значение",
    );
  }
  if (fieldValue.length > maxLength) {
    return new ValidationWarning(
      fieldName, fieldValue, "Слишком длинное значение",
    );
  }
};

export default checkFieldByLength;