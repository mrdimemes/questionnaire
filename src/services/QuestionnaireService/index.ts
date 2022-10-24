import api from "src/api";
import { wrapFetchError } from "src/api/utils";
import store from "src/redux";
import {
  Tag,
  Questionnaire,
  QuestionnaireCardsBunch,
  QuestionnaireAnswerDTO,
  QuestionnaireChangeDTO,
} from "src/models";
import { setTags } from "src/redux/slices/tagsSlice";


class QuestionnaireService {
  static async getTags() {
    try {
      const response = await api.get<Tag[]>("questionnaires/tags");
      store.dispatch(setTags(response.data));
    } catch (error) {
      throw wrapFetchError(error);
    };
  };

  static async getQuestionnaireCards(startPage: number, cardsPerPage: number) {
    try {
      const response = await api.get<QuestionnaireCardsBunch>(
        "questionnaires/questionnaireCards",
        { params: { startPage, cardsPerPage } },
      );
      return response.data;
    } catch (error) {
      throw wrapFetchError(error);
    };
  };

  static async getQuestionnaire(id: number) {
    try {
      const response =
        await api.get<Questionnaire>("questionnaires/questionnaire/" + id);
      return response.data;
    } catch (error) {
      throw wrapFetchError(error);
    };
  };

  static async sendQuestionnaireAnswer(answerDTO: QuestionnaireAnswerDTO) {
    try {
      const userId = store.getState().auth.user?.id;
      await api.post<any>(
        "questionnaires/saveAnswer",
        { userId: userId, answer: answerDTO },
      );
    } catch (error) {
      throw wrapFetchError(error);
    };
  };

  static async editQuestionnaire(changeDTO: QuestionnaireChangeDTO) {
    try {
      await api.post<any>(
        "questionnaires/editQuestionnaire",
        { change: changeDTO },
      );
    } catch (error) {
      throw wrapFetchError(error);
    };
  };

  static async removeQuestionnaire(id: number) {
    try {
      await api.post<any>("questionnaires/removeQuestionnaire", { id });
    } catch (error) {
      throw wrapFetchError(error);
    };
  };

  static async addQuestionnaire(questionnaire: Questionnaire) {
    try {
      await api.post<any>(
        "questionnaires/addQuestionnaire",
        { questionnaire },
      );
    } catch (error) {
      throw wrapFetchError(error);
    };
  };

  static async addTag(label: string) {
    try {
      const response =
        await api.post<number>("questionnaires/addTag", { label });
      const tagId = response.data;
      return tagId;
    } catch (error) {
      throw wrapFetchError(error);
    };
  };

  static async removeTag(tagId: number) {
    try {
      await api.post<any>("questionnaires/removeTag", { tagId });
    } catch (error) {
      throw wrapFetchError(error);
    };
  };
};

export default QuestionnaireService;