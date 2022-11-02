import { ValidationWarning } from "src/models";


const checkPasswordConfirmationField = (
  password: string,
  passwordConfirmation: string,
) => {
  if (password !== passwordConfirmation) {
    return new ValidationWarning(
      "passwordConfirmation", passwordConfirmation, "Пароли не совпадают",
    );
  };
};

export default checkPasswordConfirmationField;