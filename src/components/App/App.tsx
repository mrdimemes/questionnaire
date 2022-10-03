import classNames from "classnames";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "src/components";
import {
  MainPage,
  QuestionnaireListPage,
  TagsPage,
  QuestionnairePage,
  AuthPage
} from "src/pages";
import { QuestionnaireService } from "src/services";
import { useAppDispatch, useThemeSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { setTags } from "src/redux/slices/tagsSlice";
import styles from "./App.module.sass";

function App() {
  const dispatch = useAppDispatch();
  const currentTheme = useThemeSelector();

  useEffect(() => {
    QuestionnaireService.getTags().then((tags) => dispatch(setTags(tags)));
  }, [dispatch]);

  return (
    <div className={classNames(
      styles.body,
      getThemeStyle(styles, currentTheme)
    )}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="questionnaires" element={<QuestionnaireListPage />} />
        <Route path="tags" element={<TagsPage />} />
        <Route path="questionnaire/:questionnaireId"
          element={<QuestionnairePage />} />
        <Route path="auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;