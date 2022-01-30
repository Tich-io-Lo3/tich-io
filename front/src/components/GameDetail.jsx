import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAPI } from "../providers/ApiProviders";
import { useCurrentUser } from "../providers/CurrentUserProvider";
import Nav from "./Nav";

const GameDetail = () => {
  let { gameId } = useParams();
  gameId = parseInt(gameId);
  const { useFetch, API } = useAPI();
  const { currentUser } = useCurrentUser();
  const [game, setGame] = useState();
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    useFetch(() => {
      return API.getGameById(gameId);
    })
      .then((data) => setGame(data))
      .then(() => {
        if (currentUser) {
          useFetch(() => {
            return API.getUserLibrary(currentUser.id);
          }).then((data) => setLibrary(data));
        }
      });
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
      {currentUser && <button onClick={addGameToLibrary}>Buy</button>}
    </div>
  );

  function addGameToLibrary() {
    if (library.filter((g) => g.GameId === game.id).length === 0) {
      useFetch(() => {
        return API.addGameToLibrary(currentUser.id, game.id);
      }); //.then(() => navigate("/signin"));//TODO navigate to library
    } else {
      alert("Vous possédez déjà ce jeu");
    }
  }
};

export default GameDetail;
