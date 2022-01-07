import React, { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: "Tiego",
  }); // TODO API: getCurrentUser() / token de connexion ?

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

CurrentUserProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export const useCurrentUser = () => useContext(CurrentUserContext);
