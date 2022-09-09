import { TextInput } from "src/components";
import { Field } from "src/models";
import styles from "./TextRowField.module.sass";

interface FieldProps extends Field {
  questionId: string | number,
  value: string,
  callback: (value: string) => void
}

const TextRowField = ({ text, questionId, value, callback }: FieldProps) => {
  return (
    <div className={styles.body}>
      <div>{text}</div>
      <TextInput name={String(questionId)} value={value} callback={callback} />
    </div>
  )
}

export default TextRowField