import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAPI } from "../providers/ApiProviders";
import Nav from "./Nav";

const GameDetail = () => {
  let { gameId } = useParams();
  gameId = parseInt(gameId);
  const { useFetch, API } = useAPI();
  const [game, setGame] = useState();

  useEffect(() => {
    useFetch(() => {
      return API.getGameById(gameId);
    }).then((data) => setGame(data));
  }, []);

  return (
    <div>
      <Nav />
      <p>Detail</p>
      <p>{game?.title}</p>
      <p>{game?.description}</p>
      <p>{game?.imageFolder}</p>
      <p>
        {game?.creator?.name}
        <Link to={`/users/${game?.creator?.id}`}>User Page</Link>
      </p>
      <p>Download links :</p>
      <p>{game?.windowsFile}</p>
      <p>{game?.macOsFile}</p>
      <p>{game?.linuxFile}</p>
    </div>
  );
};

export default GameDetail;
