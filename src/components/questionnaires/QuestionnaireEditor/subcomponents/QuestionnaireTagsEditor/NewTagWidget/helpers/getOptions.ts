import { Tag } from "src/models";


export const getOptions = (
  tagsMap: Map<number, Tag>,
  ignoredTags: number[],
) => {
  const options = [] as [number, string][];
  for (const [id, tag] of Array.from(tagsMap.entries())) {
    if (!ignoredTags.includes(id)) options.push([id, tag.label]);
  }
  return options;
};