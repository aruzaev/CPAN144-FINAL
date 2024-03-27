import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Home, Footer, Account, About, Generate } from "./screens";
import Navbar from "./components/Global/NavBarComponents/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Home />
      <Account />
      <About />
      <Generate />
      <Footer />
    </div>
  );
}

export default App;
