import { Field, Question, QuestionType } from "src/models";
import { CheckboxField, RadioField, TextRowField } from "../fields";
import styles from "./QuestionComponent.module.sass";

const QuestionComponent = (
  { id, questionType, text, fields }: Question
) => {

  const getFieldNode = (field: Field) => {
    const props = {
      ...field,
      key: field.id,
      questionId: id
    }
    switch (questionType) {
      case QuestionType.Checkbox:
        return <CheckboxField {...props} value={""} callback={(value) => { }} />;
      case QuestionType.Radio:
        return <RadioField {...props} value={""} callback={(value) => { }} />;
      case QuestionType.Text:
        return <TextRowField {...props} value={""} callback={(value) => { }} />;
    }
  };

  return (
    <div>
      <p className={styles.text}>{text}</p>
      <div className={styles.fields}>
        {fields.map((field) => getFieldNode(field))}
      </div>
    </div>
  )
}

export default QuestionComponent