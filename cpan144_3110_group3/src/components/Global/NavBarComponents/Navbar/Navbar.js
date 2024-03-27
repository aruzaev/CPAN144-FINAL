import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";

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
    // <nav className="navbar">
    //   <div className="logo">LOGO</div>
    //   <SearchBar
    //     onSearch={handleSearch}
    //     onToggle={toggleSearchActive}
    //     isActive={searchActive}
    //   />
    // //   <div className="nav-items">
    //     <div className="nav-item">Home</div>
    //     <div className="nav-item">Categories</div>
    //     <div className="nav-item">Account</div>
    //     <div className="nav-item">About</div>
    //   </div>
    // </nav>

    <div>
      <nav className="navbar__main">
        <div className="navbar__links">
          <div className="nav-item">Home</div>
          <div className="nav-item">Categories</div>
          <div className="nav-item">Account</div>
          <div className="nav-item">About</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
