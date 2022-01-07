import React, { useState } from "react";
import { useCurrentUser } from "../providers/CurrentUserProvider";

const userTest = [
  //TODO getAllUsers()
  {
    id: 1,
    username: "tiego",
    password: "123",
  },
  {
    id: 2,
    username: "plante",
    password: "verte",
  },
  {
    id: 3,
    username: "monkey",
    password: "enzo",
  },
];

const ConnexionForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useCurrentUser();

  return (
    <form>
      <label htmlFor="username">Username :</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password :</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="button" onClick={checkConnexionInfo}>
        Connexion
      </button>
    </form>
  );

  function checkConnexionInfo() {
    userTest.map((user) => {
      if (user.username === username && user.password === password) {
        setCurrentUser(user);
      }
    });
  }
};

export default ConnexionForm;
