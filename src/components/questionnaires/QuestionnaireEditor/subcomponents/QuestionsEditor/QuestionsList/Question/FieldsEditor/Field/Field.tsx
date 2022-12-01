import { useState } from "react";

import { TextInput } from "src/components";

import styles from "./Field.module.sass";

import type { FieldProps } from "./types";


const Field = ({ field, update }: FieldProps) => {
  const [value, setValue] = useState(field.text);
  const onChange = (fieldValue: string) => {
    setValue(fieldValue);
    update(fieldValue);
  };

  return (
    <TextInput
      className={styles.Field}
      name="fieldValue"
      value={value}
      autoFocus={true}
      onChange={onChange}
    />
  );
};

export default Field;