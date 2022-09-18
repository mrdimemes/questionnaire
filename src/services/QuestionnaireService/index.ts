import api from "src/api";
import { Tag, Questionnaire, QuestionnaireCardsBunch } from "src/models";


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
}

export default QuestionnaireService