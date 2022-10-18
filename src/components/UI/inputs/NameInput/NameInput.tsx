import { TextInput } from "../";

import type { SpecificInputProps } from "../types";

const NameInput = (props: SpecificInputProps) => {
  return <TextInput
    className={props.className}
    name={props.name}
    value={props.value}
    placeholder={props.placeholder}
    maxLength={
      props.maxLength ??
      Number(process.env.REACT_APP_MAX_NAME_LENGTH ?? "30")}
    isRequired={props.isRequired ?? true}
    forwardedRef={props.forwardedRef}
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    autoFocus={props.autoFocus}
  />;
};

export default NameInput;