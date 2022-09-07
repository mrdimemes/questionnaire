const validateByLength = (
  field: string, minLength: number, maxLength: number
) => {
  if (field.length < minLength) {
    return [false, "Слишком короткое значение"]
  } else if (field.length > maxLength) {
    return [false, "Слишком длинное значение"]
  } else {
    return [true, undefined]
  }
}

export default validateByLength