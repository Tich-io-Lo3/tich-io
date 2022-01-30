import React, { useState, useEffect } from "react";
import { useAPI } from "../providers/ApiProviders";
import { useNavigate, useParams } from "react-router-dom";
import { useCurrentUser } from "../providers/CurrentUserProvider";
import Nav from "./Nav";
import PropTypes from "prop-types";

const ManageGame = () => {
  let { gameId } = useParams();
  const { currentUser } = useCurrentUser();
  gameId = parseInt(gameId);
  const navigate = useNavigate();
  const { useFetch, API } = useAPI();
  const [games, setGames] = useState([]);
  const [windowsChecked, setWindowsChecked] = useState(false);
  const [macosChecked, setMacosChecked] = useState(false);
  const [linuxChecked, setLinuxChecked] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (gameId) {
      useFetch(() => {
        return API.getGameById(gameId);
      }).then((game) => {
        setTitle(game.title);
        setDescription(game.description);
      });
    } else {
      useFetch(() => {
        return API.getGames();
      }).then((data) => setGames(data));
    }
  }, []);

  return (
    <>
      <Nav />
      <main
        style={{
          padding: "1rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <h2>{gameId ? "Game modification" : "Game creation"}</h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            checkInfo();
          }}
        >
          <label htmlFor="title">
            Title :
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Description :
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <label>
            Game images :
            <input type="file" id="images" name="images" multiple={true} />
          </label>

          <h4 style={{ marginBottom: 0 }}>
            On which OS is your game available?
          </h4>
          <label>
            <input
              type="checkbox"
              id="windows"
              onChange={() => setWindowsChecked(!windowsChecked)}
              checked={windowsChecked}
            />
            Windows
          </label>
          {windowsChecked && <input type="file" id="windows" name="windows" />}
          <label>
            <input
              type="checkbox"
              id="macos"
              onChange={() => setMacosChecked(!macosChecked)}
              checked={macosChecked}
            />
            MacOS
          </label>
          {macosChecked && <input type="file" id="macos" name="macos" />}
          <label>
            <input
              type="checkbox"
              id="linux"
              onChange={() => setLinuxChecked(!linuxChecked)}
              checked={linuxChecked}
            />
            Linux
          </label>
          {linuxChecked && <input type="file" id="linux" name="linux" />}

          <input
            style={{ alignSelf: "center" }}
            type="submit"
            value="Valider"
          ></input>
        </form>
      </main>
    </>
  );

  function checkInfo() {
    if (!gameId) {
      if (games.filter((g) => g.title === title).length === 0) {
        useFetch(() => {
          return API.createGame(currentUser.id, title, description);
        }).then(() => navigate("/games"));
      } else {
        alert("This game name is already taken");
      }
    } else {
      useFetch(() => {
        return API.updateGame(gameId, title, description);
      }).then(() => navigate("/games"));
    }
  }
};

ManageGame.propTypes = {
  gameId: PropTypes.number,
};

ManageGame.defaultProps = {
  gameId: null,
};

export default ManageGame;
