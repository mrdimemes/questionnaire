import { TextInput } from "../";
import type { SpecificInputProps } from "../types";

const NameInput = ({
  className,
  name,
  value,
  callback,
  placeholder,
  maxLength,
  isRequired }: SpecificInputProps
) => {
  return (
    <TextInput
      className={className}
      name={name}
      value={value}
      callback={callback}
      placeholder={placeholder}
      maxLength={
        maxLength ??
        Number(process.env.REACT_APP_MAX_NAME_LENGTH ?? "30")}
      isRequired={isRequired ?? true}
    />
  )
}

export default NameInput