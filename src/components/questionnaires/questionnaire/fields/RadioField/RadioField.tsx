import { Radio } from "src/components/UI/inputs/Radio";
import { Field } from "src/models/questionnaire/Field";
import styles from "./RadioField.module.sass";

const RadioField = ({ text }: Field) => {
  return (
    <div className={styles.body}>
      <Radio />
      <div>{text}</div>
    </div>
  )
}

export default RadioField