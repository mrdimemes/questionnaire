import { useState, useEffect } from "react";
import { useTagsDataSelector, useAppDispatch } from "src/redux/hooks";
import { removeTag as removeTagAction } from "src/redux/slices/tagsSlice";
import { LoadingSpinner, PaginationBar, Button } from "src/components";
import { TagComponent, AddTagWidget } from "../";
import { FetchStatus, Tag } from "src/models";
import styles from "./TagGallery.module.sass";
import { QuestionnaireService } from "src/services";
import { FetchError } from "src/api/errors";


type TagGalleryProps = {
  resetScroll?: () => void;
}

const TagGallery = ({ resetScroll }: TagGalleryProps) => {
  const [tags, status] = useTagsDataSelector();
  const tagsPerPage = 20;
  const totalPages = Math.ceil(tags.length / tagsPerPage);
  const [activePage, setActivePage] = useState(1);
  const startIndex = (activePage - 1) * tagsPerPage;
  const dispatch = useAppDispatch();

  const removeTag = (tag: Tag) => {
    const alarmText = `Вы дейсвительно хотите удалить тэг "${tag.label}" ` +
      `(опросов: ${tag.freq})?`;
    const confirmation = window.confirm(alarmText);
    if (confirmation) {
      QuestionnaireService.removeTag(tag.id).then(response => {
        if (response instanceof FetchError) {
          console.log(response)
        } else {
          dispatch(removeTagAction(tag.id));
        }
      });
    }
  };

  useEffect(() => {
    if (resetScroll) resetScroll();
  }, [activePage, resetScroll]);

  return (
    <div className={styles.gallery}>
      {status === FetchStatus.Loading && <LoadingSpinner />}

      {status === FetchStatus.Complete && <>
        <AddTagWidget className={styles.addTagWidget} />
        {tags.slice(startIndex, startIndex + tagsPerPage).map((tag) => {
          return (
            <div
              className={styles.tagContainer}
              key={`tag-container-${tag.id}`}
            >
              <TagComponent
                key={`tag-${tag.id}`}
                label={tag.label}
                freq={tag.freq}
              />
              <Button
                className={styles.removeTagButton}
                key={`tag-rb-${tag.id}`}
                onClick={() => removeTag(tag)}
                children="x"
              />
            </div>
          )

        })}
      </>}

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