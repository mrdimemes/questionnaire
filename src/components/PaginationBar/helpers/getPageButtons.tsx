import { addButtons, addButtonsWithCuts } from "./";


export const getPageButtons = (
  totalPages: number,
  activePage: number,
  callback: (page: number) => void,
) => {
  const buttons: JSX.Element[] = [];

  if (totalPages <= 14) {
    addButtons(buttons, 1, totalPages, activePage, callback);
  } else {
    addButtonsWithCuts(buttons, totalPages, activePage, callback);
  }

  return buttons;
};