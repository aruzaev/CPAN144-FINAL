import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Home, Footer, Account, About, Generate} from "./screens";
import NotFound from "./screens/NotFound/NotFound";
import Navbar from "./components/Global/NavBarComponents/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
        </div>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
