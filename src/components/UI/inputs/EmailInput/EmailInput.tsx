import classNames from "classnames";
import { Input } from "../";
import styles from "./EmailInput.module.sass";
import type { SpecificInputProps } from "../types";

const EmailInput = ({
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
      className={classNames(styles.EmailInput, className)}
      inputType="email"
      name={name}
      value={value}
      callback={callback}
      placeholder={placeholder}
      maxLength={
        maxLength ??
        Number(process.env.REACT_APP_MAX_EMAIL_LENGTH ?? "30")}
      isRequired={isRequired ?? true}
    />
  )
}

export default EmailInput