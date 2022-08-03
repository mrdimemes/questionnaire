import { useState, useEffect } from "react";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "src/redux/hooks"
import { NavigationPage, setActivePage } from "src/redux/slices/browseSlice";;
import { QuestionnaireCard } from "src/models/Questionnaire";


const QuestionnaireListPage = () => {
  const dispatch = useAppDispatch();
  const [items, setItems] = useState<Array<QuestionnaireCard>>();

  const tags = useAppSelector((state) => {
    const tagsMap = new Map<number, string>();
    for (const tag of state.tags.tags) {
      tagsMap.set(tag.id, tag.label)
    }
    return tagsMap
  });

  useEffect(() => {
    dispatch(setActivePage(NavigationPage.QuestionnaireList));
    axios.get("http://localhost:3000/backendPlaceholder/questionnaires.json").then(
      (res) => setItems(res.data.questionnaires)
    )
  }, [dispatch]);

  return (
    <div className="page wrapper">
      <h1>Все опросы</h1>
      <ul className="gallery"> {
        items?.map((item) => {
          return <li key={item.id}>
            <h2>{item.label}</h2>
            <div> {
              item.tags.map((tagId) => {
                return <div key={`${item.id}_${tagId}`}>
                  {tags.get(tagId)}
                </div>
              })
            } </div>
          </li>
        })
      } </ul>
    </div>
  )
}

export default QuestionnaireListPage;