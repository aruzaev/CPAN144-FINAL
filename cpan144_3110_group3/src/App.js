import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Home,
  Footer,
  Account,
  About,
  Generate,
  Recent,
} from "./screens";
import NotFound from "./screens/NotFound/NotFound";
import Navbar from "./components/Global/NavBarComponents/Navbar/Navbar";
import DisplayRecents from "./components/Global/DisplayRecents/DisplayRecents";
import "./App.css";
import Register from "./screens/Register/Register";
import Signin from "./screens/Signin/Signin";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./components/context/userContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./screens/Dashboard/Dashboard";
import Privacy from "./screens/Privacy/Privacy";
import TermsOfUse from "./screens/TermsOfUse/TermsOfUse";

axios.defaults.baseURL = "http://localhost:8000"; // our default url to be used for backend
axios.defaults.withCredentials = true; // gives credentials to backend

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <div className="bg-dark text-white">
          <div className="App">
            <div className="gradient__bg">
              <Navbar />
              <Toaster
                position="bottom-right"
                toastOptions={{ duration: 2000 }}
              />
            </div>
            <div className="mainContent">
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/account" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/generate" element={<Generate />} />
                <Route path="/recent" element={<Recent />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/termsofuse" element={<TermsOfUse />} />
              </Routes>
            </div>
            <div className="gradient__bg">
              <DisplayRecents />
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </UserContextProvider>
  );
};
export default App;
