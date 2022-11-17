import { Charset } from "src/utils/validation/models";
import { checkFieldByLength, checkFieldByCharset } from "src/utils/validation";


const checkPasswordField = (password: string) => {
  const lengthCheckResult = checkFieldByLength(
    password,
    "password",
    Number(process.env.REACT_APP_MIN_PASSWORD_LENGTH ?? "6"),
    Number(process.env.REACT_APP_MAX_PASSWORD_LENGTH ?? "30"),
  );
  if (lengthCheckResult) return lengthCheckResult;

  const charsetCheckResult =
    checkFieldByCharset(password, "password", Charset.Extended);
  if (charsetCheckResult) return charsetCheckResult;
};

export default checkPasswordField;