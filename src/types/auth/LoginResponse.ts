import { User } from "src/models";


export type LoginResponse = {
  user: User;
  accessToken: string;
  refreshToken: string;
};