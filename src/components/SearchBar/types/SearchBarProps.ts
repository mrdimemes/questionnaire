export type SearchBarProps = {
  className?: string,
  search: (searchPhrase: string) => void,
  defaultPhrase?: string,
};