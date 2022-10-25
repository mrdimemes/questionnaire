import { ValidationWarning } from "../models";


const checkFieldByRegex = (
  fieldValue: string,
  fieldName: string,
  regex: RegExp,
) => {
  if (!regex.test(fieldValue)) {
    return new ValidationWarning(
      fieldName, fieldValue, "Поле не соответствует шаблону",
    );
  }
};

export default checkFieldByRegex;