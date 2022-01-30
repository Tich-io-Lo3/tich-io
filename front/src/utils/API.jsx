const JSON_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const url_prefix = "http://api.26.muffin.pm";

const API = {
  getUsers: () => {
    return fetch(`${url_prefix}/users`, {
      method: "GET",
      headers: JSON_HEADERS,
      withCredentials: true,
    });
  },

  getUserById: (userId) => {
    return fetch(`${url_prefix}/user/${userId}`, {
      method: "GET",
      headers: JSON_HEADERS,
      withCredentials: true,
    });
  },

  getUserLink: (userId) => {
    return fetch(`${url_prefix}/user/${userId}/link`, {
      method: "GET",
      headers: JSON_HEADERS,
      withCredentials: true,
    });
  },

  addUserLink: (userId, link, service) => {
    return fetch(`${url_prefix}/user/${userId}/link`, {
      method: "POST",
      headers: JSON_HEADERS,
      withCredentials: true,
      body: JSON.stringify({
        UserId: userId,
        link,
        service,
      }),
    });
  },

  getUserLibrary: (userId) => {
    return fetch(`${url_prefix}/user/${userId}/games`, {
      method: "GET",
      headers: JSON_HEADERS,
      withCredentials: true,
    });
  },

  addGameToLibrary: (userId, gameId) => {
    return fetch(`${url_prefix}/user/${userId}/game`, {
      method: "POST",
      headers: JSON_HEADERS,
      withCredentials: true,
      body: JSON.stringify({
        UserId: userId,
        GameId: gameId,
      }),
    });
  },

  createUser: (name, password) => {
    return fetch(`${url_prefix}/user`, {
      method: "POST",
      headers: JSON_HEADERS,
      withCredentials: true,
      body: JSON.stringify({
        name,
        password,
      }),
    });
  },

  getGames: () => {
    return fetch(`${url_prefix}/games`, {
      method: "GET",
      headers: JSON_HEADERS,
      withCredentials: true,
    });
  },

  getGameById: (id) => {
    return fetch(`${url_prefix}/game/${id}`, {
      method: "GET",
      headers: JSON_HEADERS,
      withCredentials: true,
    });
  },

  createGame: (creatorId, title, description) => {
    return fetch(`${url_prefix}/game`, {
      method: "POST",
      headers: JSON_HEADERS,
      withCredentials: true,
      body: JSON.stringify({
        creatorId,
        title,
        description,
      }),
    });
  },

  updateGame: (gameId, title, description) => {
    return fetch(`${url_prefix}/game/${gameId}`, {
      method: "PUT",
      headers: JSON_HEADERS,
      withCredentials: true,
      body: JSON.stringify({
        title,
        description,
      }),
    });
  },
};

export default API;
