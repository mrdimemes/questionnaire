import { SortOption } from "src/models";

import { GalleryView } from "../../../models";


export type SettingsBarProps = {
  currentView: GalleryView,
  setCurrentView: (view: GalleryView) => void,
  sortOption: SortOption,
  setSortOption: (option: SortOption) => void,
  searchPhrase: string,
  setSearchPhrase: (phrase: string) => void,
};