import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tag } from "src/models/Tag";
import { FetchStatus } from "src/models/FetchStatus";

const initialState = {
  tags: new Array<Tag>(),
  tagsLoadingStatus: FetchStatus.Loading
}

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags: (state, action: PayloadAction<Array<Tag>>) => {
      state.tags = action.payload;
      state.tagsLoadingStatus = FetchStatus.Complete;
    }
  },
})

export const { setTags } = tagsSlice.actions;
export default tagsSlice.reducer;