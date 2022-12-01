import classNames from "classnames";

import { Tag } from "src/models";
import { Removeable, TagComponent } from "src/components";
import { useTagsMapSelector } from "src/redux/hooks";

import { NewTagWidget } from "./NewTagWidget";
import styles from "./QuestionnaireTagsEditor.module.sass";

import type { QuestionnaireTagsEditorBarProps } from "./types";


const QuestionnaireTagsEditor = ({
  className,
  tags,
  callback,
}: QuestionnaireTagsEditorBarProps) => {

  const tagsMap = useTagsMapSelector();
  const maxTags = Number(
    process.env.REACT_APP_MAX_TAGS_PER_QUESTIONNAIRE ?? "10",
  );

  const addTag = (tag: number) => callback([...tags, tag]);

  const removeTag = (tag: number) => {
    callback(tags.filter(element => element !== tag));
  };

  return (
    <div className={classNames(styles.QuestionnaireTagsEditor, className)}>
      {
        tags.map((tagId) => <Removeable
          key={tagId}
          remove={() => removeTag(tagId)}
          removeCondition={true}
        >
          <TagComponent tag={
            tagsMap.get(tagId) ??
            new Tag(-1, "Удалённый тег", 0)
          } />
        </Removeable>,
        )
      }

      {
        tags.length < maxTags &&
        <NewTagWidget ignoredTags={tags} callback={addTag} />
      }
    </div>
  );
};

export default QuestionnaireTagsEditor;