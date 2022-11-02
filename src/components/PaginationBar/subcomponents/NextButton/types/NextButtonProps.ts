export type NextButtonProps = {
  activePage: number;
  totalPages: number;
  callback: (page: number) => void;
};