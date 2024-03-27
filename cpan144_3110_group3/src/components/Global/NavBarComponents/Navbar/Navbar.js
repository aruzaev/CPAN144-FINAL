import React, { useState } from "react";
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
    //   <div className="nav-items">
    //     <div className="nav-item">Home</div>
    //     <div className="nav-item">Categories</div>
    //     <div className="nav-item">Account</div>
    //     <div className="nav-item">About</div>
    //   </div>
    // </nav>

    <div>
      <h1>Navbar</h1>
    </div>
  );
};

export default Navbar;
