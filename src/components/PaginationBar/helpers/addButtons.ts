import { getPageButton } from "./";


export const addButtons = (
  buttons: JSX.Element[],
  startPage: number,
  endPage: number,
  activePage: number,
  callback: (page: number) => void,
) => {
  for (let page = startPage; page <= endPage; page++) {
    buttons.push(getPageButton(page, page === activePage, callback));
  }
};