import classNames from "classnames";
import { Input } from "../";
import styles from "./PasswordInput.module.sass";
import type { SpecificInputProps } from "../types";

const PasswordInput = ({
  className,
  name,
  value,
  callback,
  placeholder,
  maxLength }: SpecificInputProps
) => {
  return (
    <Input
      className={classNames(styles.PasswordInput, className)}
      inputType="password"
      name={name}
      value={value}
      callback={callback}
      placeholder={placeholder}
      maxLength={
        maxLength ??
        Number(process.env.REACT_APP_MAX_PASSWORD_LENGTH ?? "30")}
      isRequired={true}
    />
  )
}

export default PasswordInput