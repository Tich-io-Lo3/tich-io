import React, { useState, useEffect } from "react";

import { useAPI } from "../providers/ApiProviders";
import { useCurrentUser } from "../providers/CurrentUserProvider";
import Nav from "./Nav";

const Library = () => {
  const { useFetch, API } = useAPI();
  const { currentUser } = useCurrentUser();
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    useFetch(() => {
      return API.getUserLibrary(currentUser.id);
    }).then((data) => {
      data.map((l) => {
        useFetch(() => {
          return API.getGameById(l.GameId);
        }).then((game) => setLibrary((oldLib) => [...oldLib, game]));
      });
    });
  }, []);

  return (
    <>
      <Nav />
      <ul>
        {library.map((g, index) => (
          <li key={index}>{g.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Library;
