import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAPI } from "../providers/ApiProviders";
import Nav from "./Nav";

const Games = () => {
  const { useFetch, API } = useAPI();
  const [games, setGames] = useState([]);

  useEffect(() => {
    useFetch(() => {
      return API.getGames();
    }).then((data) => setGames(data));
  }, []);

  return (
    <>
      <Nav />
      <ul>
        {games.map((g) => (
          <li key={g.id}>
            {g.title}
            <Link to={`${g.id}`}>Détails</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Games;
