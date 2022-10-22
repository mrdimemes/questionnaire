import { Routes, Route } from "react-router-dom";
import {
  MainPage,
  QuestionnaireListPage,
  TagsPage,
  QuestionnairePage,
  EditPage,
  AuthPage,
} from "src/pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/tags" element={<TagsPage />} />
      <Route path="/questionnaires" element={<QuestionnaireListPage />} />
      <Route path="/questionnaire/:questionnaireId"
        element={<QuestionnairePage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/edit/:questionnaireId" element={<EditPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default AppRoutes;