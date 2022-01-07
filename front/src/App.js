import { Link } from "react-router-dom";
import React from "react";
import "./App.css";
import { CurrentUserProvider } from "./providers/CurrentUserProvider";

function App() {
  return (
    <CurrentUserProvider>
      <Link to="/create-game">Create game</Link>
      <br />
      <Link to="/connexion">Sign in</Link>
      <br />
      <Link to="/creation">Sign up</Link>
      <br />
      <Link to="/games">Games</Link>
    </CurrentUserProvider>
  );
}

export default App;
