import { Link } from "react-router-dom";
import React from "react";
import "./App.css";
import { CurrentUserProvider } from "./providers/CurrentUserProvider";

function App() {
  return (
    <CurrentUserProvider>
      <Link to="/connexion">Sign in</Link>
      <Link to="/creation">Sign up</Link>
      <Link to="/games">Games</Link>
    </CurrentUserProvider>
  );
}

export default App;
