import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum NavigationPage {
  Main = "MAIN",
  Tags = "TAGS",
  QuestionnaireList = "QUESTIONNAIRES",
  None = "NONE"
}

const initialState = {
  activePage: NavigationPage.None
}

export const browseSlice = createSlice({
  name: 'browse',
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<NavigationPage>) => {
      state.activePage = action.payload;
    }
  },
})

export const { setActivePage } = browseSlice.actions;
export default browseSlice.reducer;