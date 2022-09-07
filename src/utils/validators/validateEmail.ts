import { validateByEmailRegex, validateByLength } from "./";

const validateEmail = (email: string) => {
  const lengthResult = validateByLength(
    email,
    0,
    Number(process.env.REACT_APP_MAX_EMAIL_LENGTH ?? "30")
  );
  if (lengthResult) return lengthResult;

  const regexResult = validateByEmailRegex(email);
  if (regexResult) return regexResult;

  return undefined;
}

export default validateEmail