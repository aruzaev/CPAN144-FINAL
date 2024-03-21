import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer, Account, About, Generate } from "./screens";
import { Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header_app">
          <Navbar />
          <Header />
        </div>
        <Switch>
          <Route path="/generate" component={Generate} />
          <Route path="/about" component={About} />
          <Route path="/account" component={Account} />
          <Route path="/" exact />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
