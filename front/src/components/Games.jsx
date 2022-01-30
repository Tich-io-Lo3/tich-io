import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAPI } from "../providers/ApiProviders";
//import { useNavigate } from "react-router-dom";

const Games = () => {
  //const navigate = useNavigate();
  const { useFetch, API } = useAPI();
  const [games, setGames] = useState([]);

  useEffect(() => {
    useFetch(() => {
      return API.getGames();
    }).then((data) => setGames(data));
  }, []);

  return (
    <ul>
      {games.map((g) => (
        <li key={g.id}>
          {g.title}
          <Link to={`${g.id}`}>Détails</Link>
        </li>
      ))}
    </ul>
  );
};

export default Games;
