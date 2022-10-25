import classNames from "classnames";

import { TagComponent, Button } from "src/components";
import { withTheme } from "src/HOCs";
import { QuestionnaireService } from "src/services";
import { useAppDispatch } from "src/redux/hooks";
import { removeTag as removeTagAction } from "src/redux/slices/tagsSlice";
import { executeWithConfirmation } from "src/utils/helpers";

import styles from "./TagGalleryItem.module.sass";

import type { TagGalleryItemProps } from "./types/TagGalleryItemProps";


const TagGalleryItem = ({ tag, className }: TagGalleryItemProps) => {
  const dispatch = useAppDispatch();

  const removeTag = () => {
    executeWithConfirmation(
      `Удалить тэг "${tag.label}" (опросов: ${tag.frequency})?`,
      () => {
        QuestionnaireService.removeTag(tag.id)
          .then(() => {
            dispatch(removeTagAction(tag.id));
          });
      },
    );
  };

  return (
    <div className={classNames(styles.TagGalleryItem, className)}>
      <TagComponent label={tag.label} frequency={tag.frequency} />
      <Button className={styles.deleteButton} onClick={removeTag} />
    </div>
  );
};

export default withTheme(TagGalleryItem, styles);