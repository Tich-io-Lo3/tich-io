import { Link } from "react-router-dom";
import React from "react";
import "./App.css";
import { CurrentUserProvider } from "./providers/CurrentUserProvider";

function App() {
  return (
    <CurrentUserProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "pink",
          height: "150%",
          padding: 15,
        }}
      >
        <Link
          to="/create-game"
          style={{ textDecoration: "none", fontWeight: "bold", color: "black" }}
        >
          Create game
        </Link>
        <Link
          to="/connexion"
          style={{ textDecoration: "none", fontWeight: "bold", color: "black" }}
        >
          Sign in
        </Link>
        <Link
          to="/creation"
          style={{ textDecoration: "none", fontWeight: "bold", color: "black" }}
        >
          Sign up
        </Link>
        <Link
          to="/games"
          style={{ textDecoration: "none", fontWeight: "bold", color: "black" }}
        >
          Games
        </Link>
      </div>
    </CurrentUserProvider>
  );
}

export default App;
