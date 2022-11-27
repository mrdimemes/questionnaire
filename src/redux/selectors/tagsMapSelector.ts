import { Tag } from "src/models";

import type { RootState } from "../";


const tagsMapSelector = (state: RootState) => {
  const map = new Map<number, Tag>();
  for (const tag of state.tags.tags) {
    map.set(tag.id, tag);
  }
  return map;
};

export default tagsMapSelector;