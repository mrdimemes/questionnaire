import { checkFieldByLength, checkFieldByEmailRegex } from "./";


const checkEmailField = (email: string) => {
  const lengthCheckResult = checkFieldByLength(
    email,
    "email",
    4,
    Number(process.env.REACT_APP_MAX_EMAIL_LENGTH ?? "30"),
  );
  if (lengthCheckResult) return lengthCheckResult;

  const regexCheckResult = checkFieldByEmailRegex(email);
  if (regexCheckResult) return regexCheckResult;
};

export default checkEmailField;