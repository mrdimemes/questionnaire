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
      <Route path="/" element={<MainPage />} />
      <Route path="/tags" element={<TagsPage />} />
      <Route path="/questionnaires" element={<QuestionnaireListPage />} />
      <Route path="/questionnaires/:tagId" element={<QuestionnaireListPage />} />
      <Route path="/questionnaire/:questionnaireId"
        element={<QuestionnairePage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/edit/:questionnaireId" element={<EditPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
    </Routes>
  );
};

export default AppRoutes;