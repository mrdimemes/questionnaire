export type PaginationBarProps = {
  className?: string;
  activePage: number;
  totalPages: number;
  callback: (page: number) => void;
};