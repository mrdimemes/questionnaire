import classNames from "classnames";
import { TagComponent, Button } from "src/components";
import { AttachTagWidget } from "../";
import { useTagsMapSelector } from "src/redux/hooks";
import styles from "./TagEditBar.module.sass";

type TagEditBarProps = {
  tags: number[],
  className?: string,
  callback: (tags: number[]) => void
};

const TagEditBar = ({ className, tags, callback }: TagEditBarProps) => {
  const tagsMap = useTagsMapSelector();
  const maxTags =
    Number(process.env.REACT_APP_MAX_TAGS_PER_QUESTIONNAIRE ?? "10");

  const removeTag = (tag: number) => {
    const tagIndex = tags.indexOf(tag);
    const newTagArray = [...tags];
    if (tagIndex !== -1) newTagArray.splice(tagIndex, 1);
    callback(newTagArray);
  }
  const addTag = (tag: number) => {
    const newTags = [...new Set([...tags, tag])];
    callback(newTags.slice(0, maxTags));
  }

  return (
    <div className={classNames(styles.TagEditBar, className)}>
      {
        tags.map((tagId) => {
          return (
            <div className={styles.tagContainer} key={`tc-${tagId}`}>
              <TagComponent
                key={`tag-${tagId}`}
                label={"" + tagsMap.get(tagId)}
              />
              <Button
                className={styles.button}
                key={`rb-${tagId}`}
                onClick={() => { removeTag(tagId) }}
                children="x"
              />
            </div>
          )
        })
      }
      {
        tags.length < maxTags &&
        <AttachTagWidget ignoredTags={tags} callback={addTag} />
      }
    </div>
  )
}

export default TagEditBar