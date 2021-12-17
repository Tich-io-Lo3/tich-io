import { Link } from "react-router-dom";
import logo from "./logo.svg";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Link to="/test">Test</Link>
    </div>
  );
}

export default App;
