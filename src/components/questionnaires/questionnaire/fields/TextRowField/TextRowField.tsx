import { TextInput } from "src/components/UI/inputs/TextInput";
import { Field } from "src/models/questionnaire/Field";
import styles from "./TextRowField.module.sass";

interface FieldProps extends Field {
  questionId: string | number
}

const TextRowField = ({ text, questionId }: FieldProps) => {
  return (
    <div className={styles.body}>
      <div>{text}</div>
      <TextInput name={String(questionId)} />
    </div>
  )
}

export default TextRowField