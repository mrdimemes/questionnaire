import axios from "axios";
import { RefreshResponse } from "src/models";

const api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BACKEND_URL
});

api.interceptors.request.use(config => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers = { Authorization: `Bearer ${accessToken}` };
  }
  return config;
});

api.interceptors.response.use(
  config => { return config },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      const response = await api.get<RefreshResponse>(
        "auth/refresh",
        { withCredentials: true }
      );
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      return api.request(originalRequest);
    }
    throw error;
  });

export default api;