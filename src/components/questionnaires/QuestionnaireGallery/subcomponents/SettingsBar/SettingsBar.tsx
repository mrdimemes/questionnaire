import { SearchBar, SortBar } from "src/components";
import { SortOption } from "src/models";

import { ViewSwitchButton } from "./subcomponents";
import styles from "./SettingsBar.module.sass";

import type { SettingsBarProps } from "./types";


const options: [SortOption, string][] = [
  [SortOption.NoSort, "Не сортировать"],
  [SortOption.Alphabet, "По названию (А-Я)"],
  [SortOption.ReverseAlphabet, "По названию (Я-А)"],
];

const SettingsBar = (props: SettingsBarProps) => {
  return (
    <div className={styles.SettingsBar}>
      <SearchBar
        className={styles.search}
        defaultPhrase={props.searchPhrase}
        search={props.setSearchPhrase}
      />
      <SortBar
        options={options}
        selectedOption={props.sortOption}
        setSortOption={props.setSortOption}
      />
      <ViewSwitchButton
        currentView={props.currentView}
        setCurrentView={props.setCurrentView}
      />
    </div>
  );
};

export default SettingsBar;