import { TextInput } from "src/components/UI/inputs/TextInput";
import { Field } from "src/models/questionnaire/Field";
import styles from "./TextRowField.module.sass";

interface FieldProps extends Field {
  questionId: string | number,
  callback: (value: string) => void
}

const TextRowField = ({ text, questionId, callback }: FieldProps) => {
  return (
    <div className={styles.body}>
      <div>{text}</div>
      <TextInput name={String(questionId)} callback={callback}/>
    </div>
  )
}

export default TextRowField