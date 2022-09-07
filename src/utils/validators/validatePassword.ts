import { validateByCharset, validateByLength } from "./";
import { Charset } from "./validateByCharset";

const validatePassword = (password: string) => {
  const lengthResult = validateByLength(
    password,
    Number(process.env.REACT_APP_MIN_PASSWORD_LENGTH ?? "6"),
    Number(process.env.REACT_APP_MAX_PASSWORD_LENGTH ?? "30")
  );
  if (!lengthResult[0]) return lengthResult;

  const regexResult = validateByCharset(password, Charset.extended);
  if (!regexResult[0]) return regexResult;

  return [true, undefined];
}

export default validatePassword