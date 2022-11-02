import { QuestionType, Field } from "./";


class Question {
  id: number;
  questionType: QuestionType;
  text: string;
  fields: Field[];
  isRequired: boolean;

  constructor(
    id: number,
    questionType: QuestionType,
    text: string,
    fields: Field[],
    isRequired: boolean,
  ) {
    this.id = id;
    this.questionType = questionType;
    this.text = text;
    this.fields = fields;
    this.isRequired = isRequired;
  };
};

export default Question;