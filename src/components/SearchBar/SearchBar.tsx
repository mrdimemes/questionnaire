import { useState, useEffect } from "react";

import { TextInput } from "src/components";

import type { SearchBarProps } from "./types";


const SearchBar = ({ className, search, defaultPhrase }: SearchBarProps) => {
  const [searchPhrase, setSearchPhrase] = useState(defaultPhrase ?? "");

  useEffect(() => {
    const timer = setTimeout(() => search(searchPhrase), 1000);
    return () => clearTimeout(timer);
  }, [search, searchPhrase]);

  return (
    <TextInput
      className={className}
      name="search"
      value={searchPhrase}
      onChange={setSearchPhrase}
      maxLength={50}
    />
  );
};

export default SearchBar;