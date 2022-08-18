import { Checkbox } from "src/components/UI/inputs/Checkbox";
import { Field } from "src/models/questionnaire/Field";
import styles from "./CheckboxField.module.sass";

const CheckboxField = ({ text }: Field) => {
  return (
    <div className={styles.body}>
      <Checkbox />
      <div>{text}</div>
    </div>
  )
}

export default CheckboxField