import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <nav className="navbar__main">
      <div className="navbar__left">
        <div className="navbar__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar__links-container">
          <div className="navbar__links-container1">
            <Link to="/categories">Categories</Link>
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
          <Link to="/account">Account</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="navbar__sign">
          <a href="#signin">Sign in</a>
          <button type="button">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
