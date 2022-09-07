const validateByLength = (
  field: string,
  minLength: number,
  maxLength: number
): string | undefined => {
  if (field.length < minLength) {
    return "Слишком короткое значение";
  } else if (field.length > maxLength) {
    return "Слишком длинное значение";
  } else {
    return undefined;
  }
}

export default validateByLength