import { validateByCharset, validateByLength } from "./";
import { Charset } from "./validateByCharset";

const validateName = (name: string) => {
  const lengthResult = validateByLength(
    name,
    Number(process.env.REACT_APP_MIN_NAME_LENGTH ?? "1"),
    Number(process.env.REACT_APP_MAX_NAME_LENGTH ?? "30")
  );
  if (lengthResult) return lengthResult;

  const regexResult = validateByCharset(name, Charset.basic);
  if (regexResult) return regexResult;

  return undefined;
}

export default validateName