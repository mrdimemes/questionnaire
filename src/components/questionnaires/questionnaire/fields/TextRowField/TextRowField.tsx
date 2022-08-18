import { TextInput } from "src/components/UI/inputs/TextInput";
import { Field } from "src/models/questionnaire/Field";
import styles from "./TextRowField.module.sass";

const TextRowField = ({ text }: Field) => {
  return (
    <div className={styles.body}>
      <div>{text}</div>
      <TextInput />
    </div>
  )
}

export default TextRowField