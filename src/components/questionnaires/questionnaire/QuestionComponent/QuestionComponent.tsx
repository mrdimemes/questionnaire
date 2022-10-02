import { useState, useEffect, useCallback } from "react";
import { Field, Question, QuestionType } from "src/models";
import { FieldComponent } from "../";
import styles from "./QuestionComponent.module.sass";

interface QuestionComponentProps extends Question {
  callback: (questionId: number, answersMap: Map<number, string>) => void,
}

const QuestionComponent = ({
  id,
  questionType,
  text,
  fields,
  callback
}: QuestionComponentProps) => {

  const [answersMap, setAnswersMap] = useState<Map<number, string>>(new Map());
  const updateAnswer = useCallback((fieldId: number, value: string) => {
    const newMap = new Map(answersMap.set(fieldId, value));
    if (questionType === QuestionType.Radio) {
      fields.forEach((field) => {
        if (field.id !== fieldId) newMap.set(field.id, "false");
      });
    }
    setAnswersMap(newMap);
  }, []);

  const getFieldNode = (field: Field, index: number) => {
    const fieldProps = {
      questionId: id,
      questionType: questionType,
      field: field,
      callback: updateAnswer,
    }
    return <FieldComponent key={index} {...fieldProps} />
  };

  useEffect(() => {
    callback(id, answersMap);
  }, [callback, id, answersMap]);

  return (
    <div>
      <p className={styles.text}>{text}</p>
      <div className={styles.fields}>
        {fields.map((field, index) => getFieldNode(field, index))}
      </div>
    </div>
  )
}

export default QuestionComponent