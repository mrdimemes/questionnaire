import { configureStore } from "@reduxjs/toolkit";
import { authSlice, tagsSlice, browseSlice, themeSlice } from "./slices";

const store = configureStore({
  reducer: {
    tags: tagsSlice,
    browse: browseSlice,
    auth: authSlice,
    theme: themeSlice
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;