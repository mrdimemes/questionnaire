import { useState, useRef, useEffect, useContext } from "react";

import { CheckboxInput } from "src/components";

import { Field } from "../";
import { changeCheckboxFieldValue } from "../../../reducers/actions";
import { AnswersDispatchContext } from "../../../contexts";

import type { CheckboxFieldProps } from "./types";


const CheckboxField = ({ questionId, fieldId, text }: CheckboxFieldProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] =
    useState(checkboxRef.current?.checked ?? false);
  const onChange = () => setIsChecked(checkboxRef.current?.checked ?? false);

  const dispatch = useContext(AnswersDispatchContext);

  useEffect(() => {
    dispatch(changeCheckboxFieldValue(questionId, fieldId, "" + isChecked));
  }, [questionId, fieldId, dispatch, isChecked]);

  return (
    <Field fieldId={fieldId} label={text}>
      <CheckboxInput
        forwardedRef={checkboxRef}
        name={"" + questionId}
        onChange={onChange}
      />
    </Field>
  );
};

export default CheckboxField;