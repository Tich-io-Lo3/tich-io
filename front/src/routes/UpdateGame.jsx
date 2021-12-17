import React, { useState } from "react";

const UpdateGame = () => {
  const [windowsChecked, setWindowsChecked] = useState(false);
  const [macosChecked, setMacosChecked] = useState(false);
  const [linuxChecked, setLinuxChecked] = useState(false);

  const title = new URLSearchParams(window.location.search).get("title");

  const game = {
    title: "",
    description: "",
    //IMAGES
    windowsFile: "",
    macOsFile: "",
    linuxFile: "",
  };

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
      <h2>Édition d&apos;un jeu</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <label htmlFor="titre">
          Titre :
          <input type="text" id="titre" name="title" value={title} required />
        </label>
        <label>
          Description :
          <input type="text" id="description" name="description" required />
        </label>
        <label>
          Images de votre jeu :
          <input
            type="file"
            id="images"
            name="images"
            multiple={true}
            required
          />
        </label>

        <h4 style={{ marginBottom: 0 }}>
          Dans quelle(s) version(s) votre jeu est-il disponible ?
        </h4>
        <label>
          <input
            type="checkbox"
            id="windows"
            onClick={() => setWindowsChecked(!windowsChecked)}
            checked={windowsChecked}
          />
          Windows
        </label>
        {windowsChecked ? (
          <input type="file" id="windows" name="windows" required />
        ) : null}
        <label>
          <input
            type="checkbox"
            id="macos"
            onClick={() => setMacosChecked(!macosChecked)}
            checked={macosChecked}
          />
          MacOS
        </label>
        {macosChecked ? (
          <input type="file" id="macos" name="macos" required />
        ) : null}
        <label>
          <input
            type="checkbox"
            id="linux"
            onClick={() => setLinuxChecked(!linuxChecked)}
            checked={linuxChecked}
          />
          Linux
        </label>
        {linuxChecked ? (
          <input type="file" id="linux" name="linux" required />
        ) : null}

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
