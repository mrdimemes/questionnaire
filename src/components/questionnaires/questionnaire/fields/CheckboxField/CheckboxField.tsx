import { Checkbox } from "src/components/UI/inputs/Checkbox";
import { Field } from "src/models/questionnaire/Field";
import styles from "./CheckboxField.module.sass";

interface FieldProps extends Field {
  questionId: string | number
}

const CheckboxField = ({ text, questionId }: FieldProps) => {
  return (
    <div className={styles.body}>
      <Checkbox name={String(questionId)} />
      <div>{text}</div>
    </div>
  )
}

export default CheckboxField