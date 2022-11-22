import { useState, useEffect } from "react";

import { useTagsDataSelector } from "src/redux/hooks";
import { PaginationBar, Loadable } from "src/components";
import { useUserAdminFlagSelector } from "src/redux/hooks";

import { TagGalleryItem, AddTagWidget } from "./subcomponents";
import { TagGalleryProps } from "./types/TagGalleryProps";
import styles from "./TagGallery.module.sass";


const TagGallery = ({ pageSize, resetScroll }: TagGalleryProps) => {
  const [tags, status] = useTagsDataSelector();
  const tagsPerPage = pageSize ?? 20;
  const totalPages = Math.ceil(tags.length / tagsPerPage);
  const [activePage, setActivePage] = useState(1);
  const startIndex = (activePage - 1) * tagsPerPage;
  const isUserAdmin = useUserAdminFlagSelector();

  const changeActivePage = (page: number) => {
    setActivePage(page > totalPages ? totalPages : page);
  };

  useEffect(() => {
    if (resetScroll) resetScroll();
  }, [activePage, resetScroll]);

  return (
    <Loadable loadingStatus={status}>
      <div className={styles.TagGallery}>

        {
          isUserAdmin &&
          <AddTagWidget className={styles.addTagWidget} />
        }

        {tags.slice(startIndex, startIndex + tagsPerPage).map((tag) => {
          return <TagGalleryItem key={tag.id} tag={tag} />;
        })}

        <PaginationBar
          className={styles.pagination}
          activePage={activePage}
          totalPages={totalPages}
          callback={changeActivePage}
        />

      </div>
    </Loadable>
  );
};

export default TagGallery;