import classNames from "classnames";
import { TagComponent } from "src/components";
import { useTagsMapSelector } from "src/redux/hooks";
import styles from "./TagBar.module.sass";

type TagBarProps = {
  tags: number[],
  className?: string
};

const TagBar = ({ className, tags }: TagBarProps) => {
  const tagsMap = useTagsMapSelector();

  return (
    <div className={classNames(styles.body, className)}> {
      tags.map((tagId) => {
        return <TagComponent key={tagId} label={"" + tagsMap.get(tagId)} />
      })
    } </div>
  )
}

export default TagBar