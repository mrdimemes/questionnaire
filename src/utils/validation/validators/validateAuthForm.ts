import { ValidationError } from "../exceptions";
import { ValidationWarning } from "../models";

import {
  checkEmailField,
  checkNameField,
  checkPasswordField,
  checkPasswordConfirmationField,
} from "./";


const validateAuthForm = (
  email: string,
  name: string,
  password: string,
  passwordConfirmation: string,
) => {
  const warnings: ValidationWarning[] = [];

  const emailWarning = checkEmailField(email);
  if (emailWarning) warnings.push(emailWarning);

  const nameWarning = checkNameField(name);
  if (nameWarning) warnings.push(nameWarning);

  const passwordWarning = checkPasswordField(password);
  if (passwordWarning) warnings.push(passwordWarning);

  const passwordConfirmationWarning =
    checkPasswordConfirmationField(password, passwordConfirmation);
  if (passwordConfirmationWarning) warnings.push(passwordConfirmationWarning);

  if (warnings.length > 0) throw new ValidationError(warnings);
};

export default validateAuthForm;