// src/services/api.js
const API_URL = process.env.REACT_APP_API_URL;

export const registerUser = async (user) => {
  const response = await fetch(`${API_URL}/api/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const loginUser = async (user) => {
  const response = await fetch(`${API_URL}/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const getPasswords = async () => {
  const response = await fetch(`${API_URL}/api/passwords`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.json();
};

export const addPassword = async (passwordEntry) => {
  const response = await fetch(`${API_URL}/api/passwords`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(passwordEntry),
  });
  return response.json();
};
