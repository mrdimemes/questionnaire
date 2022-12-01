import { useState, useRef, useEffect, useContext } from "react";

import { RadioInput } from "src/components";

import { Field } from "../";
import { changeRadioFieldValue } from "../../../reducers/actions";
import { AnswersDispatchContext } from "../../../contexts";

import type { RadioFieldProps } from "./types";


const RadioField = ({ questionId, fieldId, text }: RadioFieldProps) => {
  const radioRef = useRef<HTMLInputElement>(null);
  const [dispatchToggler, setDispatchToggler] = useState(false);
  const onChange = () => setDispatchToggler(!dispatchToggler);

  const dispatch = useContext(AnswersDispatchContext);

  useEffect(() => {
    dispatch(changeRadioFieldValue(
      questionId,
      fieldId,
      radioRef.current?.checked ?? false,
    ));
  }, [questionId, fieldId, dispatch, dispatchToggler]);

  return (
    <Field fieldId={fieldId} label={text}>
      <RadioInput
        forwardedRef={radioRef}
        name={"" + questionId}
        onChange={onChange}
        value={"" + fieldId}
      />
    </Field>
  );
};

export default RadioField;