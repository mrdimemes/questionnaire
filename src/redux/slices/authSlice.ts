import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "src/models";

interface AuthState {
  userName: string | null,
  userId: number | null,
  isAdmin: boolean,
}

const userString = localStorage.getItem("user");
const userInStorage = userString ? JSON.parse(userString) : null;

const initialState: AuthState = {
  userName: userInStorage ? String(userInStorage.name) : null,
  userId: userInStorage ? Number(userInStorage.id) : null,
  isAdmin: userInStorage ? Boolean(userInStorage.isAdmin) : false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.userName = user.name;
      state.userId = user.id;
      state.isAdmin = Boolean(user.isAdmin);
      localStorage.setItem("user", JSON.stringify(user));
    },
    clearUser: (state) => {
      state.userName = null;
      state.userId = null;
      state.isAdmin = false;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;