import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer, Account, About, Generate } from "./screens";
import Home from "./screens/Home/Home";
import Navbar from "./components/Global/NavBarComponents/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <div className="header_app">
          <Header />
        </div>
        <Generate />
        <About />
        <Account />
        {/* <Routes>
          <Route path="/generate" element={<Generate />} />
          <Route path="/about" component={<About />} />
          <Route path="/account" component={<Account />} />
          <Route path="/" exact />
        </Routes> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
