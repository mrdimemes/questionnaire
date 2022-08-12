import axios from "axios";
import classNames from "classnames";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "src/components";
import { MainPage, QuestionnaireListPage, TagsPage } from "src/pages";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { setTags } from "src/redux/slices/tagsSlice";
import styles from "./App.module.sass";

function App() {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    axios.get("http://localhost:3000/backendPlaceholder/tags.json").then(
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
      </Routes>
    </div>
  );
}

export default App;