import { useState, useEffect } from "react";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import { NavigationPage, setActivePage } from "src/redux/slices/browseSlice";
import { QuestionnaireCard as CardModel } from "src/models/Questionnaire";
import { QuestionnaireCard } from "src/components";


const QuestionnaireListPage = () => {
  const dispatch = useAppDispatch();
  const [cards, setCards] = useState<Array<CardModel>>();

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
      (res) => setCards(res.data.questionnaires)
    )
  }, [dispatch]);

  return (
    <div className="page">
      <div className="wrapper">
        <h1>Все опросы</h1>
        <div className="gallery">{
          cards?.map((card) => {
            return <QuestionnaireCard
              key={card.id}
              id={card.id}
              label={card.label}
              tags={card.tags.map((tagId) => {
                return { id: tagId, label: "" + tags.get(tagId) }
              })}
            />
          })
        }</div >
      </div >
    </div >
  )
}

export default QuestionnaireListPage;