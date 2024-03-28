import React, { useState } from "react";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../../../assets/logo.png";
import { DropdownButton, Dropdown } from "react-bootstrap";

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
    // TODO: ADD SMALL SCREEN HAMBURGER MENU BAR
    // FIX DROPDOWM
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
              {/* <Dropdown>
                <Dropdown.Toggle variant="success">Open Menu</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Home Page</Dropdown.Item>
                  <Dropdown.Item href="#">Settings</Dropdown.Item>
                  <Dropdown.Item href="#">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
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
