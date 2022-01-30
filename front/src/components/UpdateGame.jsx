import React, { useState, useEffect } from "react";
import { useAPI } from "../providers/ApiProviders";
import { useNavigate } from "react-router-dom";

const UpdateGame = () => {
  const navigate = useNavigate();
  const { useFetch, API } = useAPI();
  const [games, setGames] = useState([]);
  const [windowsChecked, setWindowsChecked] = useState(false);
  const [macosChecked, setMacosChecked] = useState(false);
  const [linuxChecked, setLinuxChecked] = useState(false);
  const [title, setTitle] = useState(
    new URLSearchParams(window.location.search).get("title")
  );
  const [description, setDescription] = useState("");

  useEffect(() => {
    useFetch(() => {
      return API.getGames();
    }).then((data) => setGames(data));
  }, []);

  return (
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
      <h2>Game modification</h2>
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

        <h4 style={{ marginBottom: 0 }}>On which OS is your game available?</h4>
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
  );

  function checkInfo() {
    if (games.filter((g) => g.title === title).length === 0) {
      useFetch(() => {
        return API.createGame(title, description);
      }).then(() => navigate("/games"));
    } else {
      alert("This game name is already taken");
    }
  }
};

export default UpdateGame;
