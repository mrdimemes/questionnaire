import { forwardRef } from "react";
import { TextInput } from "../";
import type { SpecificInputProps } from "../types";

const NameInput = forwardRef<HTMLInputElement, SpecificInputProps>(
  (props, ref) => {
    return <TextInput
      className={props.className}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      maxLength={
        props.maxLength ??
        Number(process.env.REACT_APP_MAX_NAME_LENGTH ?? "30")}
      isRequired={props.isRequired ?? true}
      ref={ref}
    />
  }
);

NameInput.displayName = "NameInput";
export default NameInput;