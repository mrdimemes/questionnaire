import { Input } from "../Input";
import styles from "./TextInput.module.sass";
import type { SpecificInputProps } from "../types";

const TextInput = ({ name, value, callback }: SpecificInputProps) => {
  return (
    <Input 
      className={styles.TextInput}
      inputType="text"
      name={name}
      value={value}
      callback={callback}
    />
  )
}

export default TextInput