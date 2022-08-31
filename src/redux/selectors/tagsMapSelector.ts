import type { RootState } from "../store";

const tagsMapSelector = (state: RootState) => {
  const map = new Map<number, string>();
  for (const tag of state.tags.tags) {
    map.set(tag.id, tag.label)
  }
  return map
};

export default tagsMapSelector;