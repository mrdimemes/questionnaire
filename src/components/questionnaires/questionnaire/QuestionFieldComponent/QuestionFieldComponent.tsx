import { Field } from "src/models/questionnaire/Field";

const QuestionFieldComponent = ({ text, isExtended }: Field) => {
  return (
    <div>
      <p>{text}</p>
      <p>Extended? {isExtended}</p>
    </div>
  )
}

export default QuestionFieldComponent