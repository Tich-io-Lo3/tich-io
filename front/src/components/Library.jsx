import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    }).then((data) => setLibrary(data));
  }, []);

  return (
    <>
      <Nav />
      <ul>
        {library.map((g) => (
          <li key={g.id}>
            {g.title}
            <Link to={`${g.id}`}>Détails</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Library;
