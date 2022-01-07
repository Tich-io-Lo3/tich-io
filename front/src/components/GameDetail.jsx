import React from "react";
import { useParams, Link } from "react-router-dom";

const GameDetail = () => {
  let { gameId } = useParams();
  gameId = parseInt(gameId);
  //TODO findGameById()
  const gameIndex = games.findIndex((g) => g.id == gameId);
  const game = games[gameIndex];

  return (
    <div>
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

//TODO getAllGames()
const games = [
  {
    id: 1,
    title: "Fifa",
    description: "foot",
    imageFolder: "/path ToAWS",
    windowsFile: "PATH DU JEU WINDOWS",
    macOsFile: "PATH DU JEU MACOS",
    linuxFile: "PATH DU JEU LINUX",
    creator: { id: 1, name: "Tiego" },
  },
  {
    id: 2,
    title: "COD",
    description: "guerre",
    imageFolder: "/path ToAWS",
    windowsFile: "PATH DU JEU WINDOWS",
    macOsFile: "PATH DU JEU MACOS",
    linuxFile: "PATH DU JEU LINUX",
    creator: { id: 2, name: "Tiego" },
  },
  {
    id: 3,
    title: "BF",
    description: "guerre",
    imageFolder: "/path ToAWS",
    windowsFile: "PATH DU JEU WINDOWS",
    macOsFile: "PATH DU JEU MACOS",
    linuxFile: "PATH DU JEU LINUX",
    creator: { id: 3, name: "Tiego" },
  },
  {
    id: 4,
    title: "Skater XL",
    description: "skate",
    imageFolder: "/path ToAWS",
    windowsFile: "PATH DU JEU WINDOWS",
    macOsFile: "PATH DU JEU MACOS",
    linuxFile: "PATH DU JEU LINUX",
    creator: { id: 4, name: "Tiego" },
  },
];

export default GameDetail;
