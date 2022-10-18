import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Theme {
  Light = "LIGHT",
  Dark = "DARK"
}

const themeInStorage = localStorage.getItem("theme");
const initialState = {
  theme: themeInStorage ? themeInStorage as Theme : Theme.Light,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

type ThemeStyles = {
  theme_light: string,
  theme_dark: string
}

export const getThemeStyle = (styles: ThemeStyles, currentTheme: Theme) => {
  return currentTheme === Theme.Light ? styles.theme_light : styles.theme_dark;
};

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;