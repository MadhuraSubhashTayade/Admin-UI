import React from "react";
import { ChangeEvent } from "react";
import { StyledSearch } from "../styles/Search.styles";

interface SearchProps {
  searchVal: string;
  setSearchText: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({
  searchVal,
  setSearchText,
}: SearchProps) => {
  return (
    <>
      <StyledSearch
        type="text"
        placeholder="search by name, email or role..."
        onChange={setSearchText}
        value={searchVal}
      />
    </>
  );
};

export default Search;
