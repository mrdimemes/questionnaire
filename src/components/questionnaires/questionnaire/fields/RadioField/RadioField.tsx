import { RadioInput } from "src/components/UI/inputs/RadioInput";
import { Field } from "src/models/questionnaire/Field";
import styles from "./RadioField.module.sass";

interface FieldProps extends Field {
  questionId: string | number,
  callback: (value: string) => void
}

const RadioField = ({ text, questionId, callback }: FieldProps) => {
  return (
    <div className={styles.body}>
      <RadioInput name={String(questionId)} callback={callback} />
      <div>{text}</div>
    </div>
  )
}

export default RadioField