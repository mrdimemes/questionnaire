import { validateByEmailRegex, validateByLength } from "./";

const validateEmail = (email: string) => {
  const regexResult = validateByEmailRegex(email);
  if (!regexResult[0]) return regexResult;
  const lengthResult = validateByLength(
    email,
    0,
    Number(process.env.REACT_APP_MAX_EMAIL_LENGTH ?? "30")
  );
  if (!lengthResult[0]) return lengthResult;
  return [true, undefined];
}

export default validateEmail