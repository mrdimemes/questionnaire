import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tag, FetchStatus } from "src/models";

const initialState = {
  tags: new Array<Tag>(),
  tagsLoadingStatus: FetchStatus.Loading,
};

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    setTags: (state, action: PayloadAction<Array<Tag>>) => {
      state.tags = action.payload;
      state.tagsLoadingStatus = FetchStatus.Complete;
    },
    addTag: (state, action: PayloadAction<Tag>) => {
      const newTagArray = state.tags as Tag[];
      newTagArray.push(action.payload);
      state.tags = newTagArray;
    },
    removeTag: (state, action: PayloadAction<number>) => {
      const targetTagId = action.payload;
      const newTagArray = [] as Tag[];
      for (const tag of state.tags) {
        if (tag.id !== targetTagId) newTagArray.push(tag as Tag);
      }
      state.tags = newTagArray;
    },
  },
});

export const { setTags, addTag, removeTag } = tagsSlice.actions;
export default tagsSlice.reducer;