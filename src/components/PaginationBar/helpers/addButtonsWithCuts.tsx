import { PaginationBreak } from "../subcomponents";

import { addButtons } from "./";


export const addButtonsWithCuts = (
  buttons: JSX.Element[],
  totalPages: number,
  activePage: number,
  callback: (page: number) => void,
) => {

  const activeLocalityStart = (activePage < 6) ?
    4 :
    (activePage - 2);
  const activeLocalityEnd = (activePage > totalPages - 5) ?
    (totalPages - 3) :
    (activePage + 2);

  addButtons(buttons, 1, 3, activePage, callback);

  if (activePage > 6) {
    buttons.push(<PaginationBreak key="firstBreak" />);
  }

  addButtons(
    buttons,
    activeLocalityStart,
    activeLocalityEnd,
    activePage,
    callback,
  );

  if (activePage < totalPages - 5) {
    buttons.push(<PaginationBreak key="secondBreak" />);
  }

  addButtons(buttons, totalPages - 2, totalPages, activePage, callback);
};