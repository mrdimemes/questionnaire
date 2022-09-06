import { Input } from "../Input";
import styles from "./EmailInput.module.sass";
import type { SpecificInputProps } from "../types";

const EmailInput = ({ name, value, callback }: SpecificInputProps) => {
  return (
    <Input
      className={styles.EmailInput}
      inputType="email"
      name={name}
      value={value}
      callback={callback}
    />
  )
}

export default EmailInput