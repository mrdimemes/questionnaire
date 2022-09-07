import classNames from "classnames";
import { Input } from "../";
import styles from "./TextInput.module.sass";
import type { SpecificInputProps } from "../types";

const TextInput = ({
  className,
  name,
  value,
  callback,
  placeholder,
  maxLength,
  isRequired }: SpecificInputProps
) => {
  return (
    <Input
      className={classNames(styles.TextInput, className)}
      inputType="text"
      name={name}
      value={value}
      callback={callback}
      placeholder={placeholder}
      maxLength={maxLength}
      isRequired={isRequired}
    />
  )
}

export default TextInput