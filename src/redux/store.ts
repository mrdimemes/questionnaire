import { configureStore } from "@reduxjs/toolkit";
import tagsSlice from "./slices/tagsSlice";

const store = configureStore({
  reducer: {
    tags: tagsSlice
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;