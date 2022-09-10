import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "src/models";

interface AuthState {
  user: User | null
}

const userInStorage = localStorage.getItem("user");

const initialState: AuthState = {
  user: userInStorage ? JSON.parse(userInStorage) : null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    }
  },
})

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;