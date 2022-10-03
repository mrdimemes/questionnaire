import { useState, useEffect } from "react";
import { useTagsDataSelector } from "src/redux/hooks";
import { TagComponent, LoadingSpinner, PaginationBar } from "src/components";
import { FetchStatus } from "src/models";
import styles from "./TagGallery.module.sass";


type TagGalleryProps = {
  resetScroll?: () => void;
}

const TagGallery = ({ resetScroll }: TagGalleryProps) => {
  const [tags, status] = useTagsDataSelector();
  const tagsPerPage = 20;
  const totalPages = Math.ceil(tags.length / tagsPerPage);
  const [activePage, setActivePage] = useState(1);
  const startIndex = (activePage - 1) * tagsPerPage;

  useEffect(() => {
    if (resetScroll) resetScroll();
  }, [activePage]);

  return (
    <div className={styles.body}>
      {status === FetchStatus.Loading && <LoadingSpinner />}

      {status === FetchStatus.Complete &&
        tags.slice(startIndex, startIndex + tagsPerPage).map((tag) => {
          return <TagComponent
            key={tag.id}
            label={tag.label}
            freq={tag.freq}
          />
        })
      }

      <PaginationBar
        className={styles.pagination}
        activePage={activePage}
        totalPages={totalPages}
        callback={setActivePage}
      />

    </div>
  );
}

export default TagGallery