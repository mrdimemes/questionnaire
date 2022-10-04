import api from "src/api";
import { getFetchError } from "src/api/utils";
import store from "src/redux";
import {
  Tag,
  Questionnaire,
  QuestionnaireCardsBunch,
  QuestionnaireAnswerDTO
} from "src/models";
import { setTags } from "src/redux/slices/tagsSlice";


class QuestionnaireService {
  static async getTags() {
    const response = await api.get<Tag[]>("questionnaires/tags");
    store.dispatch(setTags(response.data));
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
      const userId = store.getState().auth.user?.id;
      await api.post<any>(
        "questionnaires/saveAnswer",
        { userId: userId, answer: answerDTO }
      );
    } catch (error) {
      const fetchError = getFetchError(error);
      if (fetchError) return fetchError;
      throw error;
    }
  }

  static async addTag(label: string) {
    try {
      await api.post<any>("questionnaires/addTag", { label });
    } catch (error) {
      const fetchError = getFetchError(error);
      if (fetchError) return fetchError;
      throw error;
    }
  }

  static async removeTag(tagId: number) {
    try {
      await api.post<any>("questionnaires/removeTag", { tagId });
    } catch (error) {
      const fetchError = getFetchError(error);
      if (fetchError) return fetchError;
      throw error;
    }
  }
}

export default QuestionnaireService