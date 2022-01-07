import React from "react";
import { useParams } from "react-router-dom";

const GameDetail = () => {
  let { gameId } = useParams();
  gameId = parseInt(gameId);
  //TODO findGameById()
  const gameIndex = games.findIndex((g) => g.id == gameId);
  const game = games[gameIndex];

  return (
    <div>
      <p>Détails</p>
      <p>{game?.title}</p>
      <p>{game?.description}</p>
      <p>{game?.imageFolder}</p>

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
  },
  {
    id: 2,
    title: "COD",
    description: "guerre",
    imageFolder: "/path ToAWS",
    windowsFile: "PATH DU JEU WINDOWS",
    macOsFile: "PATH DU JEU MACOS",
    linuxFile: "PATH DU JEU LINUX",
  },
  {
    id: 3,
    title: "BF",
    description: "guerre",
    imageFolder: "/path ToAWS",
    windowsFile: "PATH DU JEU WINDOWS",
    macOsFile: "PATH DU JEU MACOS",
    linuxFile: "PATH DU JEU LINUX",
  },
  {
    id: 4,
    title: "Skater XL",
    description: "skate",
    imageFolder: "/path ToAWS",
    windowsFile: "PATH DU JEU WINDOWS",
    macOsFile: "PATH DU JEU MACOS",
    linuxFile: "PATH DU JEU LINUX",
  },
];

export default GameDetail;
