import { PasswordInput } from "src/components";

import { AuthFormField } from "../";

import type {SpecificInputProps} from "../types";


const PasswordField = ({value, setValue, error}: SpecificInputProps) => {
  return (
    <AuthFormField
      name="password"
      value={value}
      setValue={setValue}
      error={error}
      Input={PasswordInput}
      label={"Пароль"}
      required={true}
    />
  );
};

export default PasswordField;