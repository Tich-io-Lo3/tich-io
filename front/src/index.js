import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// IMPORT DE NOS ROUTES
import App from "./App";

import Connexion from "./routes/Connexion";

import CreateGame from "./components/CreateGame";
import UpdateGame from "./components/UpdateGame";
import CreateAccount from "./components/CreateAccount";
import UserDetail from "./components/UserDetail";
import Games from "./components/Games";
import GameDetail from "./components/GameDetail";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="create-game" element={<CreateGame />} />
        <Route path="update-game" element={<UpdateGame />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/creation" element={<CreateAccount />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:gameId" element={<GameDetail />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
