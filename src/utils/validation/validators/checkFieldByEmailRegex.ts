import { checkFieldByRegex } from "./";


const checkFieldByEmailRegex = (fieldValue: string) => {
  const regex = new RegExp(/^\w+([.-]\w+)*@\w+([.-]\w+)*(\.\w{2,3})+$/);
  const warning = checkFieldByRegex(fieldValue, "email", regex);
  if (warning) warning.message = "Некорректный адрес электронной почты";
  return warning;
};

export default checkFieldByEmailRegex;