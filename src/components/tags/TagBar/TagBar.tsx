import classNames from "classnames";
import { TagComponent } from "src/components";
import styles from "./TagBar.module.sass";

type TagBarProps = {
  tags: {
    id: number,
    label: string
  }[],
  className?: string
};

const TagBar = ({ className, tags }: TagBarProps) => {
  return (
    <div className={classNames(styles.body, className)}> {
      tags.map((tag) => {
        return <TagComponent key={tag.id} label={tag.label} />
      })
    } </div>
  )
}

export default TagBar