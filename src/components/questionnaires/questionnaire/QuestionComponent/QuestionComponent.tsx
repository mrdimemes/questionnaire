import { Question } from "src/models/questionnaire/Question";
import { QuestionType } from "src/models/questionnaire/QuestionType";
import { CheckboxField, RadioField, TextRowField } from "../fields";

const QuestionComponent = (
  { id, questionType, text, fields, isRequired }: Question
) => {

  const getFieldNode = (key: number, text: string) => {
    switch (questionType) {
      case QuestionType.Checkbox:
        return <CheckboxField key={key} text={text} />;
      case QuestionType.Radio:
        return <RadioField key={key} text={text} />;
      case QuestionType.Text:
        return <TextRowField key={key} text={text} />;
    }
  };

  return (
    <div>
      <p>ID = {id}</p>
      <p>TYPE = {questionType}</p>
      <p>TEXT = "{text}"</p>
      <p>REQUIRED? {isRequired ? "true" : "false"}</p>
      <div>
        {fields.map((field, index) => getFieldNode(index, field.text))}
      </div>
    </div>
  )
}

export default QuestionComponent