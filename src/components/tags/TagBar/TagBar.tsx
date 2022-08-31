import classNames from "classnames";
import { TagComponent } from "src/components";
import { useAppSelector } from "src/redux/hooks";
import { tagsMapSelector } from "src/redux/selectors";
import styles from "./TagBar.module.sass";

type TagBarProps = {
  tags: number[],
  className?: string
};

const TagBar = ({ className, tags }: TagBarProps) => {
  const tagsMap = useAppSelector(tagsMapSelector);

  return (
    <div className={classNames(styles.body, className)}> {
      tags.map((tagId) => {
        return <TagComponent key={tagId} label={"" + tagsMap.get(tagId)} />
      })
    } </div>
  )
}

export default TagBar