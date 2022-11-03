import { useState } from "react";

import { QuestionnaireCard } from "src/models";
import { QuestionnaireService } from "src/services";
import { PaginationBar, Loadable } from "src/components";

import { ViewSwitchButton, PlatesView, RowsView } from "./subcomponents";
import { GalleryView } from "./models";
import styles from "./QuestionnaireGallery.module.sass";


const QuestionnaireGallery = () => {
  const [cards, setCards] = useState<QuestionnaireCard[]>([]);
  const [currentView, setCurrentView] = useState(GalleryView.Rows);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cardsPerPage = 10;


  const loadPage = async () => {
    const cardBunch = await QuestionnaireService
      .getQuestionnaireCards(activePage, cardsPerPage);
    setCards(cardBunch.cards);
    setTotalPages(cardBunch.totalPages);
  };

  return (
    <Loadable load={loadPage}>
      <div className={styles.QuestionnaireGallery}>

        <ViewSwitchButton
          currentView={currentView}
          setCurrentView={setCurrentView}
          className={styles.viewSwitch}
        />

        {currentView === GalleryView.Plates && <PlatesView cards={cards} />}
        {currentView === GalleryView.Rows && <RowsView cards={cards} />}

        <PaginationBar
          className={styles.pagination}
          activePage={activePage}
          totalPages={totalPages ?? 1}
          callback={setActivePage}
        />

      </div >
    </Loadable>
  );
};

export default QuestionnaireGallery;