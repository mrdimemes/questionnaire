import axios from "axios";
import classNames from "classnames";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "src/components";
import {
  MainPage,
  QuestionnaireListPage,
  TagsPage,
  QuestionnairePage
} from "src/pages";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { setTags } from "src/redux/slices/tagsSlice";
import styles from "./App.module.sass";

function App() {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(themeSelector);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + "questionnaires/tags").then(
      (res) => dispatch(setTags(res.data.tags))
    )
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
      </Routes>
    </div>
  );
}

export default App;