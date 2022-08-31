import classNames from "classnames";
import { useState, useEffect } from "react";
import axios from "axios";
import { QuestionnaireCard } from "src/models/questionnaire/QuestionnaireCard";
import { QuestionnaireCardComponent, ViewSwitchButton } from "../";
import styles from "./QuestionnaireGallery.module.sass";

export enum GalleryViews {
  Rows = "ROWS",
  Plates = "PLATES"
}

const QuestionnaireGallery = () => {
  const [cards, setCards] = useState<Array<QuestionnaireCard>>();
  const [currentView, setCurrentView] = useState(GalleryViews.Rows);

  const getCardNode = (card: QuestionnaireCard) => {
    return <QuestionnaireCardComponent
      key={card.id}
      id={card.id}
      label={card.label}
      tags={card.tags}
    />
  };

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL +
      "questionnaires/questionnaireCards").then(
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