import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAPI } from "../providers/ApiProviders";
import Nav from "./Nav";

const UserDetail = () => {
  let { userId } = useParams();
  userId = parseInt(userId);
  const { useFetch, API } = useAPI();
  const [user, setUser] = useState();

  useEffect(() => {
    useFetch(() => {
      return API.getUserById(userId);
    }).then((data) => setUser(data));
  }, []);

  return (
    <div>
      <Nav />
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

export default UserDetail;
