import { useRef, useEffect } from "react";
import { Field, QuestionType } from "src/models";
import { CheckboxInput, RadioInput, TextInput } from "src/components";
import styles from "./FieldComponent.module.sass";

type FieldComponentProps = {
  questionId: number;
  questionType: QuestionType;
  field: Field;
  callback: (fieldId: number, value: string) => void;
  submitTrigger: boolean;
}

const FieldComponent = (props: FieldComponentProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const giveInputValue = () => {
    const value = props.questionType === QuestionType.Text ?
      inputRef.current?.value ?? "" :
      inputRef.current?.checked ?? false
    props.callback(props.field.id, String(value));
  }

  const getInputNode = () => {
    const inputProps = {
      name: `${props.questionId}`,
      ref: inputRef
    }
    switch (props.questionType) {
      case QuestionType.Checkbox:
        return <CheckboxInput {...inputProps} />;
      case QuestionType.Radio:
        return <RadioInput {...inputProps} />;
      case QuestionType.Text:
        return <TextInput {...inputProps} />;
    }
  }

  useEffect(giveInputValue, [props.submitTrigger]);

  return (
    <div className={
      props.questionType === QuestionType.Text ?
        styles.col_field :
        styles.row_field
    }>
      {getInputNode()}
      <div>{props.field.text}</div>
    </div>
  )
}

export default FieldComponent;