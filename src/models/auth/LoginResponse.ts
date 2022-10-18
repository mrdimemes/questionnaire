import User from "../User";

interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export default LoginResponse;