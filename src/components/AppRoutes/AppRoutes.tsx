import { Routes, Route } from "react-router-dom";
import {
  MainPage,
  QuestionnaireListPage,
  TagsPage,
  QuestionnairePage,
  EditPage,
  AuthPage,
  StatisticsPage,
} from "src/pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/questionnaire-client" element={<MainPage />} />
      <Route path="/questionnaire-client/tags" element={<TagsPage />} />
      <Route path="/questionnaire-client/questionnaires" element={<QuestionnaireListPage />} />
      <Route path="/questionnaire-client/questionnaires/:tagId" element={<QuestionnaireListPage />} />
      <Route path="/questionnaire-client/questionnaire/:questionnaireId"
        element={<QuestionnairePage />} />
      <Route path="/questionnaire-client/edit" element={<EditPage />} />
      <Route path="/questionnaire-client/edit/:questionnaireId" element={<EditPage />} />
      <Route path="/questionnaire-client/auth" element={<AuthPage />} />
      <Route path="/questionnaire-client/statistics" element={<StatisticsPage />} />
    </Routes>
  );
};

export default AppRoutes;