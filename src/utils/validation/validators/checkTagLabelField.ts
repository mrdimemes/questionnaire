import { Charset } from "../models";

import { checkFieldByLength, checkFieldByCharset } from "./";


const checkTagLabelField = (tagLabel: string) => {
  const lengthCheckResult = checkFieldByLength(
    tagLabel,
    "tagLabel",
    Number(process.env.REACT_APP_MIN_TAGLABEL_LENGTH ?? "1"),
    Number(process.env.REACT_APP_MAX_TAGLABEL_LENGTH ?? "30"),
  );
  if (lengthCheckResult) return lengthCheckResult;

  const charsetCheckResult =
    checkFieldByCharset(tagLabel, "tagLabel", Charset.Basic);
  if (charsetCheckResult) return charsetCheckResult;
};

export default checkTagLabelField;