import React, { useState, useEffect } from "react";
import { useCurrentUser } from "../providers/CurrentUserProvider";
import { useAPI } from "../providers/ApiProviders";
import { useNavigate } from "react-router-dom";

const ConnexionForm = () => {
  const navigate = useNavigate();
  const { useFetch, API } = useAPI();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useCurrentUser();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    useFetch(() => {
      return API.getUsers();
    }).then((data) => setAllUsers(data));
  }, []);

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
        Sign in
      </button>
    </form>
  );

  function checkConnexionInfo() {
    let isConnected = false;
    allUsers.map((user) => {
      if (user.name === username && user.password === password) {
        setCurrentUser(user);
        isConnected = true;
      }
    });

    if (isConnected) {
      navigate("/");
    } else {
      alert("incorrect username/password");
    }
  }
};

export default ConnexionForm;
