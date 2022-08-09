import { useState, useEffect } from "react";
import { useAppSelector } from "src/redux/hooks";
import axios from "axios";
import { QuestionnaireCard as CardModel } from "src/models/Questionnaire";
import { QuestionnaireCard } from "src/components";
import styles from "./QuestionnaireGallery.module.sass";


const QuestionnaireGallery = () => {
  const [cards, setCards] = useState<Array<CardModel>>();
  const tags = useAppSelector((state) => {
    const tagsMap = new Map<number, string>();
    for (const tag of state.tags.tags) {
      tagsMap.set(tag.id, tag.label)
    }
    return tagsMap
  });

  useEffect(() => {
    axios.get("http://localhost:3000/backendPlaceholder/questionnaires.json").then(
      (res) => setCards(res.data.questionnaires)
    )
  }, []);


  return (
    <div className={styles.body}> {
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
    } </div >
  )
}

export default QuestionnaireGallery