import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAPI } from "../providers/ApiProviders";
import Nav from "./Nav";

const UserDetail = () => {
  let { userId } = useParams();
  let navigate = useNavigate();
  userId = parseInt(userId);
  const { useFetch, API } = useAPI();
  const [user, setUser] = useState();
  const [links, setLinks] = useState([]);
  const [linkText, setLinkText] = useState("");
  const [linkType, setLinkType] = useState("Facebook");
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    useFetch(() => {
      return API.getUserById(userId);
    })
      .then((data) => setUser(data))
      .then(
        useFetch(() => {
          return API.getUserLink(userId);
        }).then((data) => setLinks(data))
      )
      .then(
        useFetch(() => {
          return API.getUserLibrary(userId);
        }).then((data) => {
          data.map((l) => {
            useFetch(() => {
              return API.getGameById(l.GameId);
            }).then((game) => setLibrary((oldLib) => [...oldLib, game]));
          });
        })
      );
  }, []);

  return (
    <div>
      <Nav />
      <h4>Details : </h4>
      <p>{user?.name}</p>
      <h4>Social media : </h4>
      <ul>
        {links.map((l) => (
          <li key={l.id}>
            <a href={l.link}>{l.service}</a>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={linkText}
          onChange={(e) => setLinkText(e.target.value)}
        />
        <select value={linkType} onChange={(e) => setLinkType(e.target.value)}>
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
          <option value="Reddit">Reddit</option>
        </select>
        <button onClick={addLink}>Add link</button>
      </div>
      <h4>Games created by {user?.username} : </h4>
      <ul>
        {library.map((g, index) => (
          <li key={index}>
            {g.title}
            <button onClick={() => navigate(`/manage-game/${g.id}`)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  function addLink() {
    if (linkType === "") {
      alert("Veuillez sélectionner un type de lien");
    } else if (linkText === "") {
      alert("Veuillez préciser un lien");
    } else {
      useFetch(() => {
        return API.addUserLink(userId, linkText, linkType);
      })
        .then(() => {
          setLinkText("");
          setLinkType("Facebook");
        })
        .then(
          useFetch(() => {
            return API.getUserLink(userId);
          }).then((data) => setLinks(data))
        );
    }
  }
};

export default UserDetail;
