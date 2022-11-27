import { Tag } from "src/models";


const searchFilter = (tag: Tag, searchPhrase: string) => {
  return tag.label.toLowerCase().includes(searchPhrase.toLowerCase());
};

export default searchFilter;