import { CheckboxInput } from "src/components/UI/inputs/CheckboxInput";
import { Field } from "src/models/questionnaire/Field";
import styles from "./CheckboxField.module.sass";

interface FieldProps extends Field {
  questionId: string | number,
  callback: (value: string) => void
}

const CheckboxField = ({ text, questionId, callback }: FieldProps) => {
  return (
    <div className={styles.body}>
      <CheckboxInput name={String(questionId)} callback={callback} />
      <div>{text}</div>
    </div>
  )
}

export default CheckboxField