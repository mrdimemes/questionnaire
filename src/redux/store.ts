import { configureStore } from "@reduxjs/toolkit";
import tagsSlice from "./slices/tagsSlice";
import browseSlice from "./slices/browseSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    tags: tagsSlice,
    browse: browseSlice,
    auth: authSlice
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;