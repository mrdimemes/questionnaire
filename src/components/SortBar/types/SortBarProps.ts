import { SortOption } from "src/models";


export type SortBarProps = {
  options: [SortOption, string][],
  selectedOption: SortOption,
  setSortOption: (option: SortOption) => void,
};