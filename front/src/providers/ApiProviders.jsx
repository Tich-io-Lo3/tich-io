import React, { useState, useEffect, createContext, useContext } from "react";
import API from "../utils/API";
import { checkStatus } from "../utils/Functions";
import { DISCONNECTION_ERROR, INTERNAL_SERVER_ERROR } from "../utils/Const";
import PropTypes from "prop-types";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [errorStatus, setErrorStatus] = useState(null);
  const [isInternetReachable, setIsInternetReachable] = useState(true);
  const [connectionError, setConnectionError] = useState(false);

  const useFetch = (apiCall) => {
    if (!isInternetReachable) {
      setConnectionError(true);
      return Promise.reject("Application stopped");
    }
    return apiCall()
      .then(checkStatus)
      .catch((error) => {
        setErrorStatus(error.status);
        return Promise.reject("Application stopped");
      });
  };

  useEffect(() => {
    if (!errorStatus) return;
    const errorMessage =
      errorStatus == DISCONNECTION_ERROR
        ? "Il semblerait que vous ayez été déconnecté."
        : errorStatus == INTERNAL_SERVER_ERROR
        ? "Une erreur est survenue."
        : "Une erreur est survenue.";
    alert(`Erreur (${errorStatus})\n${errorMessage}`);
  }, [errorStatus]);

  function listenInternetReachability() {
    const isOnline = window.navigator.onLine;
    if (isOnline !== isInternetReachable) setIsInternetReachable(isOnline);
  }

  useEffect(() => {
    if (!connectionError) return;
    alert(
      "Problème de connexion\nVous avez été déconnecté du réseau, assurez-vous d'avoir accès à internet et reconnectez-vous."
    );
    setConnectionError(false);
  }, [connectionError]);

  useEffect(() => {
    if (!("navigator" in window)) return;
    window.addEventListener("offline", listenInternetReachability);
    window.addEventListener("online", listenInternetReachability);
    return () => {
      window.removeEventListener("offline", listenInternetReachability);
      window.removeEventListener("online", listenInternetReachability);
    };
  }, []);

  return (
    <ApiContext.Provider value={{ API, useFetch }}>
      {children}
    </ApiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export const useAPI = () => useContext(ApiContext);
