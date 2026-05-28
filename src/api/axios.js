import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8001/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
  withXSRFToken: true,
});

export default api;
