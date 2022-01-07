import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  let { userId } = useParams();
  userId = parseInt(userId);

  //TODO findUserById()
  const userIndex = users.findIndex((u) => u.id == userId);
  const user = users[userIndex];

  return (
    <div>
      <p>Details</p>
      <p>{user?.username}</p>
      <p>
        {user?.facebook && "Facebook: "}
        <a href={user?.facebook}>{user?.facebook}</a>
      </p>
      <p>
        {user?.twitter && "Twitter: "}
        <a href={user?.twitter}>{user?.twitter}</a>
      </p>
      <p>
        {user?.web && "Web: "}
        <a href={user?.web}>{user?.web}</a>
      </p>
      <h4>Games created by {user?.username}</h4>
      <ul>
        {user?.games.map((g, id) => (
          <li key={id}>
            <p>
              {g.title}
              <a href="">Details</a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

//TODO getAllUsers()
const users = [
  {
    id: 1,
    username: "tiego",
    description: "desc test",
    facebook: "efefefef",
    twitter: null,
    web: null,
    games: [
      {
        title: "Jeu 1",
        description: "cekmlmdsm",
        imageFolder: "/path ToAWS",
        windowsFile: null,
        macOsFile: "PATH DU JEU MACOS",
        linuxFile: null,
      },
      {
        title: "Jeu 2",
        description: "kddskdks,d,sd",
        imageFolder: "/path ToAWS",
        windowsFile: "PATH DU JEU WINDOWS",
        macOsFile: null,
        linuxFile: "PATH DU JEU LINUX",
      },
    ],
    password: "123",
  },
  {
    id: 2,
    username: "plante",
    description: "desc test",
    facebook: "effefe",
    twitter: null,
    web: "fefefe",
    games: [],
    password: "verte",
  },
  {
    id: 3,
    username: "monkey",
    description: "desc test",
    facebook: "fefefe",
    twitter: "feeffefe",
    web: "feeffeff",
    games: [
      {
        title: "Jeu 1",
        description: "cekmlmdsm",
        imageFolder: "/path ToAWS",
        windowsFile: null,
        macOsFile: "PATH DU JEU MACOS",
        linuxFile: null,
      },
    ],
    password: "enzo",
  },
];

export default UserDetail;
