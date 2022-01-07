import React from "react";
import ConnexionForm from "../components/ConnexionForm";
import { CurrentUserProvider } from "../providers/CurrentUserProvider";

const Connexion = () => {
  return (
    <CurrentUserProvider>
      <ConnexionForm />
    </CurrentUserProvider>
  );
};

export default Connexion;
