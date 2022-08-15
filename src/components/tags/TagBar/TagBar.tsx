import { TagComponent } from "src/components";
import styles from "./TagBar.module.sass";

type TagBarProps = {
  tags: {
    id: number,
    label: string
  }[]
};

const TagBar = ({ tags }: TagBarProps) => {
  return (
    <div className={styles.body}> {
      tags.map((tag) => {
        return <TagComponent key={tag.id} label={tag.label} />
      })
    } </div>
  )
}

export default TagBar