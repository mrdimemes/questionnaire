import classNames from "classnames";
import { useState, useEffect } from "react";
import { Question, Field, QuestionType } from "src/models";
import { Select, CheckboxInput, TextArea, Button } from "src/components";

import { FieldEditor } from "../";

import styles from "./QuestionEditor.module.sass";


type QuestionEditorProps = {
  question: Question,
  callback: (question: Question, isCritical: boolean) => void;
}

const QuestionEditor = ({ question, callback }: QuestionEditorProps) => {
  const id = question.id;
  const [questionType, setQuestionType] = useState(question.questionType);
  const [isRequired, setIsRequired] = useState(question.isRequired);
  const [text, setText] = useState(question.text);
  const [fields, setFields] = useState(question.fields);
  const [isCriticalChange, setIsCriticalChange] = useState(false);
  const maxFields =
    Number(process.env.REACT_APP_MAX_FIELDS_PER_QUESTION ?? "10");
  const minFields = 1;

  const handleQuestionTypeChange = (newType: string) => {
    setQuestionType(newType as QuestionType);
  };
  const toggleIsRequired = () => setIsRequired(!isRequired);
  const handleTextChange = (newText: string) => setText(newText);
  const handleFieldChange = (newValue: string, index: number) => {
    const newFields = [...fields];
    newFields[index].text = newValue;
    setFields(newFields);
  };
  const addField = () => {
    if (fields.length >= maxFields) return;
    setIsCriticalChange(true);
    setFields([...fields, { id: 0, text: "Новый вариант" }]);
  };
  const removeField = (index: number) => {
    if (fields.length <= minFields) return;
    setIsCriticalChange(true);
    const newFields = [] as Field[];
    fields.forEach((field, idx) => {
      if (idx !== index) newFields.push(field);
    });
    setFields(newFields);
  };

  const returnQuestion = () => {
    callback(
      {
        id,
        questionType,
        text,
        fields,
        isRequired,
      } as Question,
      isCriticalChange,
    );
  };

  // eslint-disable-next-line
  useEffect(returnQuestion, [id, questionType, text, fields, isRequired]);

  const typeOptions: [string, string][] = [
    [QuestionType.Checkbox, "Чекбокс"],
    [QuestionType.Radio, "Радио"],
    [QuestionType.Text, "Текст"],
  ];

  return (
    <div className={styles.QuestionEditor}>
      <div className={styles.configBar}>
        <div className={styles.configBlock}>
          <label htmlFor="questionType">Тип вопроса:</label>
          <Select
            name="questionType"
            options={typeOptions}
            onChange={handleQuestionTypeChange}
          />
        </div>
        <div className={styles.configBlock}>
          <label htmlFor="isRequired">Обязательный?</label>
          <CheckboxInput
            name="isRequired"
            onChange={toggleIsRequired}
          />
        </div>
      </div>

      <div>
        <label htmlFor="text">Текст вопроса</label>
        <TextArea
          className={styles.questionText}
          name="text"
          onChange={handleTextChange}
        />
      </div>

      <div className={styles.fieldsBlock}>
        <h3>Варианты ответов</h3>
        <ul>
          {
            fields.map((field, index) => {
              return (
                <li
                  key={index}
                  className={classNames(
                    styles.listItem,
                    styles.fieldContainer,
                  )}
                >
                  <FieldEditor
                    field={field}
                    callback={
                      (value: string) => handleFieldChange(value, index)
                    }
                  />
                  {
                    fields.length > minFields &&
                    <Button
                      className={styles.button}
                      onClick={() => removeField(index)}
                      children="x"
                    />
                  }
                </li>
              );
            })
          }
        </ul>
        {
          fields.length < maxFields &&
          <Button
            className={classNames(styles.button, styles.addFieldButton)}
            onClick={addField}
            children="+"
          />
        }
      </div>
    </div>
  );
};

export default QuestionEditor;