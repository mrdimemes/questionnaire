import { useState, useEffect } from "react";

import { TextInput } from "src/components";

import type { SearchBarProps } from "./types";


const SearchBar = ({ search }: SearchBarProps) => {
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => search(searchPhrase), 1000);
    return () => clearTimeout(timer);
  }, [search, searchPhrase]);

  return (
    <TextInput
      name="search"
      value={searchPhrase}
      onChange={setSearchPhrase}
      maxLength={50}
    />
  );
};

export default SearchBar;