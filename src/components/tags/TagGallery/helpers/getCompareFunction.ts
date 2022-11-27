import { SortOption, Tag } from "src/models";


const compareByFrequency = (a: Tag, b: Tag) => {
  return b.frequency - a.frequency;
};

const compareById = (a: Tag, b: Tag) => {
  return a.id - b.id;
};

const compareByLabel = (a: Tag, b: Tag): number => {
  if (a.label > b.label) return 1;
  if (a.label < b.label) return -1;
  return 0;
};

const compareByLabelReversed = (a: Tag, b: Tag): number => {
  if (a.label > b.label) return -1;
  if (a.label < b.label) return 1;
  return 0;
};

const getCompareFunction = (sortOption: SortOption) => {
  if (sortOption === SortOption.Alphabet) return compareByLabel;
  if (sortOption === SortOption.ReverseAlphabet) return compareByLabelReversed;
  if (sortOption === SortOption.Frequency) return compareByFrequency;
  return compareById;
};

export default getCompareFunction;