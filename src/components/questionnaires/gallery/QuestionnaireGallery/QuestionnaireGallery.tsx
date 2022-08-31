import classNames from "classnames";
import { useState, useEffect } from "react";
import axios from "axios";
import { FetchStatus } from "src/models/FetchStatus";
import { QuestionnaireCard } from "src/models/questionnaire/QuestionnaireCard";
import { QuestionnaireCardComponent, ViewSwitchButton } from "../";
import { LoadingSpinner } from "src/components/LoadingSpinner";
import styles from "./QuestionnaireGallery.module.sass";

export enum GalleryViews {
  Rows = "ROWS",
  Plates = "PLATES"
}

const QuestionnaireGallery = () => {
  const [status, setStatus] = useState(FetchStatus.Loading);
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
        (res) => {
          setCards(res.data.questionnaires);
          setStatus(FetchStatus.Complete);
        }
      )
  }, []);

  return (
    <div className={classNames(
      styles.body,
      currentView === GalleryViews.Rows ? styles.view_rows : styles.view_plates
    )}>

      {status === FetchStatus.Loading && <LoadingSpinner />}

      {status === FetchStatus.Complete &&
        <>
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
        </>
      }

    </div >
  )
}

export default QuestionnaireGallery