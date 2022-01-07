import React from "react";
import { Link } from "react-router-dom";

const Games = () => {
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

export default Games;
