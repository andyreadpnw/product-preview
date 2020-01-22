const API_ROOT = `http://localhost:3000`;
const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json",
  Authorization: token
};

const login = data => {
  return fetch(`${API_ROOT}/auth`, {
    method: "POST",
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers
  }).then(res => {
    return res.json();
  });
};

export const api = {
  auth: {
    login,
    getCurrentUser
  }
};
