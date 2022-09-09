import { CheckboxInput } from "src/components";
import { Field } from "src/models";
import styles from "./CheckboxField.module.sass";

interface FieldProps extends Field {
  questionId: string | number,
  value: string,
  callback: (value: string) => void
}

const CheckboxField = ({ text, questionId, value, callback }: FieldProps) => {
  return (
    <div className={styles.body}>
      <CheckboxInput
        name={String(questionId)}
        value={value}
        callback={callback}
      />
      <div>{text}</div>
    </div>
  )
}

export default CheckboxField