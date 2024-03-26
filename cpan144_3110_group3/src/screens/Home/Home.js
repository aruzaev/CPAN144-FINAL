import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <div className="menu">
          <div className="menu-item">Home Page</div>
          <div className="menu-item dropdown">Categories</div>
          <div className="menu-right">
            <div className="menu-item">Account</div>
            <div className="menu-item">About</div>
          </div>
        </div>
      </nav>
      <div className="main-content">
        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Generate"
            />
            <i className="search-icon"></i>
          </div>
        </div>
        <div className="thumbnail-section">
          <div className="thumbnail">Recent</div>
          <div className="thumbnail"></div>
          <div className="thumbnail"></div>
          <div className="thumbnail"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
