import api from "src/api";
import { getFetchError } from "src/api/utils";
import {
  Tag,
  Questionnaire,
  QuestionnaireCardsBunch,
  QuestionnaireAnswerDTO
} from "src/models";


class QuestionnaireService {
  static async getTags() {
    const response = await api.get<Tag[]>("questionnaires/tags");
    return response.data;
  }

  static async getQuestionnaireCards(startPage: number, cardsPerPage: number) {
    const response = await api.get<QuestionnaireCardsBunch>(
      "questionnaires/questionnaireCards",
      { params: { startPage, cardsPerPage } }
    );
    return response.data;
  }

  static async getQuestionnaire(id: number) {
    const response =
      await api.get<Questionnaire>("questionnaires/questionnaire/" + id);
    return response.data;
  }

  static async sendQuestionnaireAnswer(answerDTO: QuestionnaireAnswerDTO) {
    try {
      await api.post<any>("questionnaires/saveAnswer", { answer: answerDTO });
    } catch (error) {
      const fetchError = getFetchError(error);
      if (fetchError) return fetchError;
      throw error;
    }
  }
}

export default QuestionnaireService