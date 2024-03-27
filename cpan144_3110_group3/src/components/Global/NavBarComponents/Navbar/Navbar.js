import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../../../assets/logo.png";

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    // call api
  };

  const toggleSearchActive = () => {
    setSearchActive((prev) => !prev);
  };

  return (
    <div>
      <nav className="navbar__main">
        <div className="navbar__left">
          <div className="navbar__logo">
            <a href="#home">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="navbar__links-container">
            <div className="navbar__links-container1">
              <a href="#categories">Categories</a>
            </div>
          </div>
        </div>
        <div className="search__bar-container">
          <SearchBar
            onSearch={handleSearch}
            onToggle={toggleSearchActive}
            isActive={searchActive}
          />
        </div>
        <div className="navbar__right">
          <div className="navbar__links-container2">
            <a href="#account">Account</a>
            <a href="#about">About</a>
          </div>
          <div className="navbar__sign">
            <a href="#signin">Sign in</a>
            <button type="button">Sign up</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
