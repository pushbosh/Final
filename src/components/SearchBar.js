import React, { useState } from "react";
import './Search-bar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input className="search"
      type="text"
      placeholder="Search cryptocurrencies..."
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
