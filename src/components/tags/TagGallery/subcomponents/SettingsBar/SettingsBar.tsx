import classNames from "classnames";

import { SearchBar, SortBar } from "src/components";
import { SortOption } from "src/models";

import styles from "./SettingsBar.module.sass";

import type { SettingsBarProps } from "./types";


const options: [SortOption, string][] = [
  [SortOption.NoSort, "Не сортировать"],
  [SortOption.Alphabet, "По названию (А-Я)"],
  [SortOption.ReverseAlphabet, "По названию (Я-А)"],
  [SortOption.Frequency, "По частоте"],
];

const SettingsBar = (props: SettingsBarProps) => {
  return (
    <div className={classNames(styles.SettingsBar, props.className)}>
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
    </div>
  );
};

export default SettingsBar;