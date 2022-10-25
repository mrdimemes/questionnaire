import { Charset } from "../models";

import { checkFieldByLength, checkFieldByCharset } from "./";


const checkNameField = (name: string) => {
  const lengthCheckResult = checkFieldByLength(
    name,
    "name",
    Number(process.env.REACT_APP_MIN_NAME_LENGTH ?? "1"),
    Number(process.env.REACT_APP_MAX_NAME_LENGTH ?? "30"),
  );
  if (lengthCheckResult) return lengthCheckResult;

  const charsetCheckResult = checkFieldByCharset(name, "name", Charset.Basic);
  if (charsetCheckResult) return charsetCheckResult;
};

export default checkNameField;