import React from "react";

const ConnexionForm = () => {
  return (
    <form>
      <input type="text" name="username" />
      <label htmlFor="username">Username :</label>
      <input type="password" name="password" />
      <label htmlFor="password">Password :</label>
    </form>
  );
};

export default ConnexionForm;
