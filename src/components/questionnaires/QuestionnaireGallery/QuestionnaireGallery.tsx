import { useState, useCallback, useEffect } from "react";

import { QuestionnaireCard, SortOption } from "src/models";
import { QuestionnaireService } from "src/services";
import { PaginationBar, Loadable } from "src/components";

import { PlatesView, RowsView, SettingsBar } from "./subcomponents";
import { GalleryView } from "./models";
import styles from "./QuestionnaireGallery.module.sass";

import type { QuestionnaireGalleryProps } from "./types";


const QuestionnaireGallery = ({ filterTag }: QuestionnaireGalleryProps) => {
  const [cards, setCards] = useState<QuestionnaireCard[]>([]);
  const [currentView, setCurrentView] = useState(GalleryView.Rows);
  const [sortOption, setSortOption] = useState(SortOption.NoSort);
  const [searchPhrase, setSearchPhrase] = useState("");
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

  useEffect(() => setActivePage(1), [sortOption, filterTag, searchPhrase]);

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

        {
          filterTag &&
          <p className={styles.prompt}>
            Опросы, содержащие тег «{filterTag.label}».
          </p>
        }

        {
          cards.length === 0 &&
          <p className={styles.prompt}>По запросу ничего не найдено.</p>
        }

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