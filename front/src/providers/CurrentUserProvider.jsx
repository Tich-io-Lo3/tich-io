import React, { useState, createContext, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    console.log(JSON.parse(localStorage.getItem("currentUser")));
  }, [currentUser]);

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
