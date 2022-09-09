import { RadioInput } from "src/components";
import { Field } from "src/models";
import styles from "./RadioField.module.sass";

interface FieldProps extends Field {
  questionId: string | number,
  value: string,
  callback: (value: string) => void
}

const RadioField = ({ text, questionId, value, callback }: FieldProps) => {
  return (
    <div className={styles.body}>
      <RadioInput
        name={String(questionId)}
        value={value}
        callback={callback}
      />
      <div>{text}</div>
    </div>
  )
}

export default RadioField