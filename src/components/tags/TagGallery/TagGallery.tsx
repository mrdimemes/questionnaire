import { useAppSelector } from "src/redux/hooks";
import { TagComponent } from "src/components";
import styles from "./TagGallery.module.sass";

const TagGallery = () => {
  const tags = useAppSelector((state) => state.tags.tags);

  return (
    <div className={styles.body}> {
      tags.map((tag) => {
        return <TagComponent key={tag.id} label={tag.label} freq={tag.freq} />
      })
    } </div>
  )
}

export default TagGallery