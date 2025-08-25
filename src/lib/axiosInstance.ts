import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:3001",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosFileInstance = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:3001",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default axiosInstance;
