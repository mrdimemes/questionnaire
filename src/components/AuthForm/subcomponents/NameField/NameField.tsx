import { TextInput } from "src/components";

import { AuthFormField } from "../";

import type {SpecificInputProps} from "../types";


const NameField = ({value, setValue, error}: SpecificInputProps) => {
  return (
    <AuthFormField
      name="name"
      value={value}
      setValue={setValue}
      error={error}
      Input={TextInput}
      label={"Имя"}
      required={true}
    />
  );
};

export default NameField;