import type { RootState } from "../";

const tagsMapSelector = (state: RootState) => {
  const map = new Map<number, string>();
  for (const tag of state.tags.tags) {
    map.set(tag.id, tag.label)
  }
  return map
};

export default tagsMapSelector;