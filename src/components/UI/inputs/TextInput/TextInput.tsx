import { Input } from "../Input";
import styles from "./TextInput.module.sass";

type TextInputProp = {
  name: string,
  callback: (value: string) => void
}

const TextInput = ({ name, callback }: TextInputProp) => {

  return (
    <Input 
      className={styles.TextInput}
      inputType="text"
      name={name}
      callback={callback}
    />
  )
}

export default TextInput