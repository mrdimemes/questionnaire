import { useAppSelector } from "src/redux/hooks";
import { TagComponent, LoadingSpinner } from "src/components";
import { FetchStatus } from "src/models";
import styles from "./TagGallery.module.sass";

const TagGallery = () => {
  const tags = useAppSelector((state) => state.tags.tags);
  const status = useAppSelector((state) => state.tags.tagsLoadingStatus);

  return (
    <div className={styles.body}>
      {status === FetchStatus.Loading && <LoadingSpinner />}

      {status === FetchStatus.Complete && tags.map((tag) => {
        return <TagComponent key={tag.id} label={tag.label} freq={tag.freq} />
      })
      }
    </div>
  );
}

export default TagGallery