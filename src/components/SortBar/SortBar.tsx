import { Select } from "src/components";

import type { SortBarProps } from "./types";


const SortBar = ({ options, selectedOption, setSortOption }: SortBarProps) => {
  return (
    <Select
      name="sortby"
      options={options}
      defaultOption={selectedOption}
      onChange={setSortOption}
    />
  );
};

export default SortBar;