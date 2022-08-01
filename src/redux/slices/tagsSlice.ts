import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tag } from "../../models/Tag";

interface TagsState {
  tags: Array<Tag>
}

const initialState: TagsState = {
  tags: new Array<Tag>()
}

export const authSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags: (state, action: PayloadAction<Array<Tag>>) => {
      state.tags = action.payload;
    }
  },
})

export const { setTags } = authSlice.actions;
export default authSlice.reducer;