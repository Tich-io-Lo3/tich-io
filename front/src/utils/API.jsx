const JSON_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const url_prefix = "http://localhost:3630";

const API = {
  getUsers: () => {
    return fetch(`${url_prefix}/users`, {
      method: "GET",
      headers: JSON_HEADERS,
      withCredentials: true,
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

  createGame: (title, description) => {
    console.log(title);
    console.log(description);
    return fetch(`${url_prefix}/game`, {
      method: "POST",
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
