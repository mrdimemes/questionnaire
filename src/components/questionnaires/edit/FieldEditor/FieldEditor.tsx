import { useState } from "react";
import { TextInput } from "src/components";
import { Field } from "src/models";

import styles from "./FieldEditor.module.sass";


type FieldEditorProps = {
  field?: Field,
  callback: (value: string) => void
}

const FieldEditor = ({ field, callback }: FieldEditorProps) => {
  const [value, setValue] = useState(field?.text ?? "");
  const [isFocused, setIsFocused] = useState(false);
  const toggleFocus = () => setIsFocused(!isFocused);
  const handleBlur = () => {
    setIsFocused(!isFocused);
    callback(value);
  };

  return (
    <div className={styles.FieldEditor}>
      {
        !isFocused &&
        <div className={styles.valueViewer} onClick={toggleFocus}>
          «{value}»
        </div>
      }
      {
        isFocused &&
        <TextInput
          className={styles.valueInput}
          name="fieldValue"
          value={value}
          autoFocus={true}
          onChange={setValue}
          onBlur={handleBlur}
        />
      }
    </div>
  );
};

export default FieldEditor;