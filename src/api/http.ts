import axios, { AxiosError } from "axios";
import { getAccessToken, clearAccessToken } from "../auth/token";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach JWT
http.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Basic 401 handling (refresh token is optional in your spec, so we just logout)
http.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      clearAccessToken();
      // optional: you can also redirect to /login here (see AuthProvider section)
    }
    return Promise.reject(err);
  }
);
