import React, { useState } from "react";

const UpdateGame = () => {
  const [windowsChecked, setWindowsChecked] = useState(false);
  const [macosChecked, setMacosChecked] = useState(false);
  const [linuxChecked, setLinuxChecked] = useState(false);
  const [title, setTitle] = useState(
    new URLSearchParams(window.location.search).get("title")
  );

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
          <input type="text" id="description" name="description" required />
        </label>
        <label>
          Game images :
          <input
            type="file"
            id="images"
            name="images"
            multiple={true}
            required
          />
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
        {windowsChecked && (
          <input type="file" id="windows" name="windows" required />
        )}
        <label>
          <input
            type="checkbox"
            id="macos"
            onChange={() => setMacosChecked(!macosChecked)}
            checked={macosChecked}
          />
          MacOS
        </label>
        {macosChecked && <input type="file" id="macos" name="macos" required />}
        <label>
          <input
            type="checkbox"
            id="linux"
            onChange={() => setLinuxChecked(!linuxChecked)}
            checked={linuxChecked}
          />
          Linux
        </label>
        {linuxChecked && <input type="file" id="linux" name="linux" required />}

        <input
          style={{ alignSelf: "center" }}
          type="submit"
          value="Valider"
        ></input>
      </form>
    </main>
  );
};

export default UpdateGame;
