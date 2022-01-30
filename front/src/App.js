import React from "react";
import "./App.css";
import { CurrentUserProvider } from "./providers/CurrentUserProvider";
import Nav from "./components/Nav";

function App() {
  return (
    <CurrentUserProvider>
      <Nav />
    </CurrentUserProvider>
  );
}

export default App;
