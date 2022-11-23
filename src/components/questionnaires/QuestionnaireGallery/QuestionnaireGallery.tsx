import { useState, useCallback } from "react";

import { QuestionnaireCard, SortOption, Tag } from "src/models";
import { QuestionnaireService } from "src/services";
import { PaginationBar, Loadable } from "src/components";

import { PlatesView, RowsView, SettingsBar } from "./subcomponents";
import { GalleryView } from "./models";
import styles from "./QuestionnaireGallery.module.sass";


const QuestionnaireGallery = () => {
  const [cards, setCards] = useState<QuestionnaireCard[]>([]);
  const [currentView, setCurrentView] = useState(GalleryView.Rows);
  const [sortOption, setSortOption] = useState(SortOption.NoSort);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [filterTag, _setFilterTag] = useState<Tag | null>(null);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cardsPerPage = 10;

  const loadPage = useCallback(
    async () => {
      const cardBunch = await QuestionnaireService
        .getQuestionnaireCards(
          sortOption,
          searchPhrase,
          filterTag?.id ?? null,
          activePage,
          cardsPerPage,
        );
      setCards(cardBunch.cards);
      setTotalPages(cardBunch.totalPages);
    },
    [activePage, filterTag, searchPhrase, sortOption],
  );

  return (
    <Loadable load={loadPage}>
      <div className={styles.QuestionnaireGallery}>

        <SettingsBar
          sortOption={sortOption}
          setSortOption={setSortOption}
          currentView={currentView}
          setCurrentView={setCurrentView}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />

        {filterTag && <p>Опросы, содержащие тег «{filterTag.label}».</p>}

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