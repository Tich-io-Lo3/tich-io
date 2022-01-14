import { Link } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <Link to="/create-game">Create game</Link>
      <br />
      <Link to="/connexion">Sign in</Link>
      <br />
      <Link to="/creation">Sign up</Link>
      <br />
      <Link to="/games">Games</Link>
    </>
  );
}

export default App;
