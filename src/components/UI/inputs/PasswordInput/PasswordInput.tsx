import { Input } from "../Input";
import styles from "./PasswordInput.module.sass";
import type { SpecificInputProps } from "../types";

const PasswordInput = ({ name, value, callback }: SpecificInputProps) => {
  return (
    <Input
      className={styles.PasswordInput}
      inputType="password"
      name={name}
      value={value}
      callback={callback}
    />
  )
}

export default PasswordInput