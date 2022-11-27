import { Tag } from "src/models";


const findTag = (tagId: number, tags: Tag[]): null | Tag => {
  let result: Tag | null = null;
  tags.forEach(tag => {
    if (tag.id === tagId) return result = tag;
  });
  return result;
};

export default findTag;