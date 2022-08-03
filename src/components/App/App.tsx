import axios from "axios";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "src/components";
import { MainPage, QuestionnaireListPage, TagsPage } from "src/pages";
import { useAppDispatch } from "src/redux/hooks";
import { setTags } from "src/redux/slices/tagsSlice";
import styles from "./App.module.sass";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get("http://localhost:3000/backendPlaceholder/tags.json").then(
      (res) => dispatch(setTags(res.data.tags))
    )
  }, []);

  return (
    <div className={styles.body}>
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