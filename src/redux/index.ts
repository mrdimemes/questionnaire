import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from '@reduxjs/toolkit'
import { authSlice, tagsSlice, browseSlice, themeSlice } from "./slices";

const rootReducer = combineReducers({
  tags: tagsSlice,
  browse: browseSlice,
  auth: authSlice,
  theme: themeSlice
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

const store = setupStore();

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];