import { useEffect } from "react";
import styles from "./App.module.sass";
import { Header } from "../../components";
import { MainPage } from "../../pages";
import { useAppDispatch } from "../../redux/hooks";
import { setTags } from "../../redux/slices/tagsSlice";
import axios from "axios";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get("http://localhost:3000/backendPlaceholder/tags.json").then(
      (res) => dispatch(setTags(res.data.tags))
      
    )
  }, []);

  return (
    <div className={styles.body}>
      <Header/>
    </div>
  );
}

export default App;