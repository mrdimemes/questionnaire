import { useState, useRef, useEffect } from "react";
import { Field, Question } from "src/models";
import { FieldComponent } from "../";
import styles from "./QuestionComponent.module.sass";

interface QuestionComponentProps extends Question {
  callback: (questionId: number, answersMap: Map<number, string>) => void,
  submitTrigger: boolean
}

const QuestionComponent = (props: QuestionComponentProps) => {
  const [answersMap, setAnswersMap] = useState<Map<number, string>>(new Map());
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const updatedFieldsCounter = useRef(0);

  const updateAnswer = (fieldId: number, value: string) => {
    setAnswersMap(answersMap.set(fieldId, value));
    increaseUpdatedFieldsCounter();
  }
  const toggleTrigger = () => setUpdateTrigger(!updateTrigger);
  const increaseUpdatedFieldsCounter = () => updatedFieldsCounter.current++;
  const resetUpdatedFieldsCounter = () => updatedFieldsCounter.current = 0;

  const waitForFieldValues = () => {
    if (updatedFieldsCounter.current !== props.fields.length) {
      setTimeout(waitForFieldValues, 100);
    }
  }

  const giveAnswers = () => {
    resetUpdatedFieldsCounter()
    toggleTrigger();
    waitForFieldValues();
    props.callback(props.id, answersMap);
  }

  const getFieldNode = (field: Field, index: number) => {
    const fieldProps = {
      questionId: props.id,
      questionType: props.questionType,
      field: field,
      callback: updateAnswer,
      submitTrigger: updateTrigger
    }
    return <FieldComponent key={index} {...fieldProps} />
  };

  // eslint-disable-next-line
  useEffect(giveAnswers, [props.submitTrigger]);

  return (
    <div>
      <p className={styles.text}>{props.text}</p>
      <div className={styles.fields}>
        {props.fields.map((field, index) => getFieldNode(field, index))}
      </div>
    </div>
  )
}

export default QuestionComponent