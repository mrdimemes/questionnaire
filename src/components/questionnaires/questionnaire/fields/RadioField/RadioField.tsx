import { Radio } from "src/components/UI/inputs/Radio";
import { Field } from "src/models/questionnaire/Field";
import styles from "./RadioField.module.sass";

interface FieldProps extends Field {
  questionId: string | number
}

const RadioField = ({ text, questionId }: FieldProps) => {
  return (
    <div className={styles.body}>
      <Radio name={String(questionId)} />
      <div>{text}</div>
    </div>
  )
}

export default RadioField