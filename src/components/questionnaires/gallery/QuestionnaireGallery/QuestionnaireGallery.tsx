import classNames from "classnames";
import { useState, useEffect } from "react";
import { FetchStatus, QuestionnaireCard } from "src/models";
import { QuestionnaireService } from "src/services";
import { QuestionnaireCardComponent, ViewSwitchButton } from "../";
import { LoadingSpinner, PaginationBar } from "src/components";
import styles from "./QuestionnaireGallery.module.sass";

export enum GalleryViews {
  Rows = "ROWS",
  Plates = "PLATES"
}

const QuestionnaireGallery = () => {
  const [status, setStatus] = useState(FetchStatus.Loading);
  const [cards, setCards] = useState<Array<QuestionnaireCard>>();
  const [currentView, setCurrentView] = useState(GalleryViews.Rows);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>();
  const cardsPerPage = 10;

  const getCardNode = (card: QuestionnaireCard) => {
    return <QuestionnaireCardComponent
      key={card.id}
      id={card.id}
      label={card.label}
      tags={card.tags}
    />
  };

  const switchActivePageHandler = async () => {
    setStatus(FetchStatus.Loading);
    const cardBunch = await QuestionnaireService
      .getQuestionnaireCards(activePage, cardsPerPage);
    setCards(cardBunch.cards);
    setTotalPages(cardBunch.totalPages);
    setStatus(FetchStatus.Complete);
  }

  useEffect(() => { switchActivePageHandler() }, [activePage]);

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
          <PaginationBar
            className={styles.pagination}
            activePage={activePage}
            totalPages={totalPages ?? 1}
            callback={setActivePage}
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