import { Question } from "src/models/questionnaire/Question";
import { QuestionFieldComponent } from "../QuestionFieldComponent";

const QuestionComponent = (
  { id, questionType, text, fields, isRequired }: Question
) => {
  return (
    <div>
      <p>ID = {id}</p>
      <p>TYPE = {questionType}</p>
      <p>TEXT = "{text}"</p>
      <p>REQUIRED? {isRequired ? "true" : "false"}</p>
      <div>
        {
          fields.map((field, index) => {
            return <QuestionFieldComponent key={index} {...field}/>
          })
        }
      </div>
    </div>
  )
}

export default QuestionComponent