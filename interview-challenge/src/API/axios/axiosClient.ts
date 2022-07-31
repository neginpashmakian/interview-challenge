import axios from "axios";

const instance = axios.create({
  baseURL: "https://realworld.io",
  timeout: 15000,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
