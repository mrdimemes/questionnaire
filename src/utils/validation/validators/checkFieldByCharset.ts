import { Charset } from "../models";

import { checkFieldByRegex } from "./";


const getCharsetRegex = (charset: Charset) => {
  switch (charset) {
    case Charset.Basic:
      return new RegExp(/^[\wА-Яа-я]+$/);
    case Charset.Extended:
      return new RegExp(/^[\wА-Яа-я<>.,!?:;+*`~@#$%^&-]+$/);
    default:
      return new RegExp(/\w*/);
  };
};

const checkFieldByCharset = (
  fieldValue: string,
  fieldName: string,
  charset: Charset,
) => {
  const regex = getCharsetRegex(charset);
  const warning = checkFieldByRegex(fieldValue, fieldName, regex);
  if (warning) warning.message = "Поле содержит запрещенный символ";
  return warning;
};

export default checkFieldByCharset;