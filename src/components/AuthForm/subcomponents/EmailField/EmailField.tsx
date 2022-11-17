import { EmailInput } from "src/components";

import { AuthFormField } from "../";

import type {SpecificInputProps} from "../types";


const EmailField = ({value, setValue, error}: SpecificInputProps) => {
  return (
    <AuthFormField
      name="email"
      value={value}
      setValue={setValue}
      error={error}
      Input={EmailInput}
      label={"Электронная почта"}
      required={true}
    />
  );
};

export default EmailField;