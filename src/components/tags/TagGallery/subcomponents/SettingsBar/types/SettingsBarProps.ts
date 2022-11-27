import { SortOption } from "src/models";


export type SettingsBarProps = {
  className?: string,
  sortOption: SortOption,
  setSortOption: (option: SortOption) => void,
  searchPhrase: string,
  setSearchPhrase: (phrase: string) => void,
};