const JSON_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const url_prefix = "http://localhost:8080";

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
};

export default API;
