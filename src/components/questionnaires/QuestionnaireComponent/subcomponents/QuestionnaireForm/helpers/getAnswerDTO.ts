import {
  QuestionnaireAnswerDTO,
  QuestionAnswerDTO,
  FieldAnswerDTO,
  Question,
} from "src/models";

import type { AnswersMap } from "../types";


export const getAnswerDTO = (
  questionnaireId: number,
  questions: Question[],
  answersMap: AnswersMap,
) => {

  const questionDTOs = questions.map(question => {
    const questionMap =
      answersMap.get(question.id) ?? new Map<number, string>();

    const fieldDTOs = question.fields.map(field => {
      return new FieldAnswerDTO(field.id, questionMap.get(field.id) ?? "");
    });

    return new QuestionAnswerDTO(
      question.id,
      question.questionType,
      fieldDTOs,
      question.isRequired,
    );
  });

  return new QuestionnaireAnswerDTO(questionnaireId, questionDTOs);
};