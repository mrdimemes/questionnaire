import api from "src/api";
import { LoginResponse } from "src/models";

class AuthService {
  static async registration(email: string, name: string, password: string) {
    const response = await api.post<LoginResponse>(
      "/auth/registration",
      { email, name, password }
    );
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    return response.data;
  }

  static async login(email: string, password: string) {
    const response = await api.post<LoginResponse>(
      "/auth/login",
      { email, password }
    );
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    return response.data;
  }

  static async logout() {
    const refreshToken = localStorage.getItem("refreshToken");
    api.post<void>("/auth/logout", { refreshToken });
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
  }
}

export default AuthService