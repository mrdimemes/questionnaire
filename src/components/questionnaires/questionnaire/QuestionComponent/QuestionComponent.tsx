import { Field } from "src/models/questionnaire/Field";
import { Question } from "src/models/questionnaire/Question";
import { QuestionType } from "src/models/questionnaire/QuestionType";
import { CheckboxField, RadioField, TextRowField } from "../fields";

const QuestionComponent = (
  { id, questionType, text, fields, isRequired }: Question
) => {

  const getFieldNode = (field: Field) => {
    switch (questionType) {
      case QuestionType.Checkbox:
        return <CheckboxField key={field.id} {...field} />;
      case QuestionType.Radio:
        return <RadioField key={field.id} {...field} />;
      case QuestionType.Text:
        return <TextRowField key={field.id} {...field} />;
    }
  };

  return (
    <div>
      <p>ID = {id}</p>
      <p>TYPE = {questionType}</p>
      <p>TEXT = "{text}"</p>
      <p>REQUIRED? {isRequired ? "true" : "false"}</p>
      <div>
        {fields.map((field) => getFieldNode(field))}
      </div>
    </div>
  )
}

export default QuestionComponent