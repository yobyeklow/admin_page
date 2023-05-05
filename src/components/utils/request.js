import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
