import { Question } from "./";


class Questionnaire {
  id: number;
  label: string;
  tags: number[];
  about: string;
  questions: Question[];

  constructor(
    id: number,
    label: string,
    tags: number[],
    about: string,
    questions: Question[],
  ) {
    this.id = id;
    this.label = label;
    this.tags = tags;
    this.about = about;
    this.questions = questions;
  };
};

export default Questionnaire;