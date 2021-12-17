import { Link } from "react-router-dom";
import React from "react";
import "./App.css";
import { CurrentUserProvider } from "./providers/CurrentUserProvider";

function App() {
  return (
    <CurrentUserProvider>
      <Link to="/connexion">Connexion</Link>
      <Link to="/creation">Creation</Link>
    </CurrentUserProvider>
  );
}

export default App;
