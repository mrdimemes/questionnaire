import { useState, useEffect, useContext } from "react";

import { TextInput } from "src/components";

import { Field } from "../";
import { changeTextFieldValue } from "../../../reducers/actions";
import { AnswersDispatchContext } from "../../../contexts";

import styles from "./TextField.module.sass";

import type { TextFieldProps } from "./types";


const TextField = ({ questionId, fieldId, text }: TextFieldProps) => {
  const [value, setValue] = useState("");
  const dispatch = useContext(AnswersDispatchContext);

  useEffect(() => {
    dispatch(changeTextFieldValue(questionId, fieldId, value));
  }, [questionId, fieldId, dispatch, value]);

  return (
    <Field className={styles.TextField} fieldId={fieldId} label={text}>
      <TextInput
        name={"" + questionId}
        value={value}
        onChange={setValue}
      />
    </Field>
  );
};

export default TextField;