import React from "react";

const CreateGame = () => {
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
      <h2>Création d&apos;un jeu</h2>
      <form
        action="/update-game"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="title">Quel est le titre de votre jeu ?</label>
        <input type="text" id="title" name="title" required />
        <input type="submit" value="Valider" />
      </form>
    </main>
  );
};

export default CreateGame;
