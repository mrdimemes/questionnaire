import classNames from "classnames";
import { useState, useEffect } from "react";
import { useAppSelector } from "src/redux/hooks";
import axios from "axios";
import {
  QuestionnaireCard as QuestionnaireCardModel
} from "src/models/questionnaire/QuestionnaireCard";
import { QuestionnaireCardComponent, ViewSwitchButton } from "../";
import styles from "./QuestionnaireGallery.module.sass";

export enum GalleryViews {
  Rows = "ROWS",
  Plates = "PLATES"
}

const QuestionnaireGallery = () => {
  const [cards, setCards] = useState<Array<QuestionnaireCardModel>>();
  const [currentView, setCurrentView] = useState(GalleryViews.Rows);
  const tags = useAppSelector((state) => {
    const tagsMap = new Map<number, string>();
    for (const tag of state.tags.tags) {
      tagsMap.set(tag.id, tag.label)
    }
    return tagsMap
  });

  const getCardNode = (card: QuestionnaireCardModel) => {
    return <QuestionnaireCardComponent
      key={card.id}
      label={card.label}
      tags={card.tags.map((tagId) => {
        return { id: tagId, label: "" + tags.get(tagId) }
      })}
    />
  };

  useEffect(() => {
    axios.get("http://localhost:3000/backendPlaceholder/questionnaires.json").then(
      (res) => setCards(res.data.questionnaires)
    )
  }, []);

  return (
    <div className={classNames(
      styles.body,
      currentView === GalleryViews.Rows ? styles.view_rows : styles.view_plates
    )}>

      <ViewSwitchButton
        setCurrentView={setCurrentView} currentView={currentView}
      />

      {currentView === GalleryViews.Plates && <>
        <div className={styles.column}> {
          cards?.filter((_, index) => index % 2 === 0)
            .map((card) => getCardNode(card))
        } </div>
        <div className={styles.column}> {
          cards?.filter((_, index) => index % 2 !== 0)
            .map((card) => getCardNode(card))
        } </div>
      </>}

      {currentView === GalleryViews.Rows &&
        cards?.map((card) => getCardNode(card))}
    </div >
  )
}

export default QuestionnaireGallery