import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// IMPORT DE NOS ROUTES
import App from "./App";

import Connexion from "./routes/Connexion";
import AccountCreation from "./routes/AccountCreation";
import CreateGame from "./routes/CreateGame";
import UpdateGame from "./routes/UpdateGame";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="connexion" element={<Connexion />} />
        <Route path="creation" element={<AccountCreation />} />
        <Route path="create-game" element={<CreateGame />} />
        <Route path="update-game" element={<UpdateGame />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
