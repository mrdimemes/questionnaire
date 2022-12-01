import { useState, useEffect } from "react";

import { Question as QuestionModel } from "src/models";

import { ConfigBar, QuestionTextEditor, FieldsEditor } from "./subcomponents";

import styles from "./Question.module.sass";

import type { QuestionProps } from "./types";


const Question = ({ question, update }: QuestionProps) => {
  const id = question.id;
  const [questionType, setQuestionType] = useState(question.questionType);
  const [isRequired, setIsRequired] = useState(question.isRequired);
  const [text, setText] = useState(question.text);
  const [fields, setFields] = useState(question.fields);

  const updateQuestion = () => {
    const question =
      new QuestionModel(id, questionType, text, fields, isRequired);
    update(question);
  };

  useEffect(
    updateQuestion,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id, questionType, text, fields, isRequired],
  );

  return (
    <div className={styles.Question}>

      <ConfigBar
        setIsRequired={setIsRequired}
        isRequired={isRequired}
        setQuestionType={setQuestionType}
      />

      <QuestionTextEditor text={text} setText={setText} />

      <FieldsEditor fields={fields} setFields={setFields}/>
    </div>
  );
};

export default Question;