import { PasswordInput } from "src/components";

import { AuthFormField } from "../";

import type { SpecificInputProps } from "../types";


const PasswordConfirmationField = (
  { value, setValue, error }: SpecificInputProps,
) => {
  return (
    <AuthFormField
      name="passwordConfiramtion"
      value={value}
      setValue={setValue}
      error={error}
      Input={PasswordInput}
      label={"Повторите пароль"}
      required={true}
    />
  );
};

export default PasswordConfirmationField;