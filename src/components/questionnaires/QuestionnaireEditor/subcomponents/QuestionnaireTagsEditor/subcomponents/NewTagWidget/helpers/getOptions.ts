export const getOptions = (
  tagsMap: Map<number, string>,
  ignoredTags: number[],
) => {
  const options = [] as [number, string][];
  for (const [value, text] of Array.from(tagsMap.entries())) {
    if (!ignoredTags.includes(value)) options.push([value, text]);
  }
  return options;
};