import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch, onToggle, isActive }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleFocus = () => {
    onToggle(); // toggle from navbar
  };

  const handleBlur = () => {
    onToggle(); // toggle from navbar
  };

  return (
    <div className={`search-bar-container ${isActive ? "active" : ""}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </form>
    </div>
  );
};

export default SearchBar;
