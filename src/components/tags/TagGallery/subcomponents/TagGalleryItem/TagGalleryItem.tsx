import { TagComponent, Removeable } from "src/components";
import { QuestionnaireService } from "src/services";
import { useAppDispatch, useUserAdminFlagSelector } from "src/redux/hooks";
import { removeTag as removeTagAction } from "src/redux/slices/tagsSlice";
import { executeWithConfirmation } from "src/utils/helpers";

import type { TagGalleryItemProps } from "./types/TagGalleryItemProps";


const TagGalleryItem = ({ tag, className }: TagGalleryItemProps) => {
  const dispatch = useAppDispatch();
  const isUserAdmin = useUserAdminFlagSelector();

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
    <Removeable remove={removeTag} removeCondition={isUserAdmin}>
      <TagComponent label={tag.label} frequency={tag.frequency} />
    </Removeable>
  );
};

export default TagGalleryItem;