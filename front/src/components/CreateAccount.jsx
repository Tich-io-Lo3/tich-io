import React, { useState } from "react";

const allUsers = [
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

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form>
      <label htmlFor="username">Nom d`&apos;`utilisateur :</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Mot de passe :</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor="confirmPassword">Confirmez le mot de passe :</label>
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <button type="button" onClick={checkInfo}>
        Connexion
      </button>
    </form>
  );

  function checkInfo() {
    if (allUsers.filter((user) => user.username === username).length === 0) {
      if (password === confirmPassword) {
        //TODO create user
        console.log("COmpte créé");
      } else {
        alert("Les mots de passes ne correspondent pas !");
      }
    } else {
      alert("L'utilisateur existe déjà");
    }
  }
};

export default CreateAccount;
