import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tag } from "../../models/Tag";

const initialState = {
  tags: new Array<Tag>()
}

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags: (state, action: PayloadAction<Array<Tag>>) => {
      state.tags = action.payload;
    }
  },
})

export const { setTags } = tagsSlice.actions;
export default tagsSlice.reducer;