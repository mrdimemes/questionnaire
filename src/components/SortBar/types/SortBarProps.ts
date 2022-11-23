export type SortBarProps = {
  options: [string | number, string][],
  sort: (option: string | number) => void,
};