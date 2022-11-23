import { Select } from "src/components";

import type { SortBarProps } from "./types";


const SortBar = ({ options, sort }: SortBarProps) => {
  return (
    <Select name="sortby" options={options} onChange={sort} />
  );
};

export default SortBar;