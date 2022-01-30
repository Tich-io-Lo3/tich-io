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
      <h2>Game creation</h2>
      <form
        action="/update-game"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="title">Game name ?</label>
        <input type="text" id="title" name="title" required />
        <input type="submit" value="Confirm" />
      </form>
    </main>
  );
};

export default CreateGame;
