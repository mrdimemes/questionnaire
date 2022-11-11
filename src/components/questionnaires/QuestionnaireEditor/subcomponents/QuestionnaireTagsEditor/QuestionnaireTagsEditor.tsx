import classNames from "classnames";

import { Removeable, TagComponent } from "src/components";
import { useTagsMapSelector } from "src/redux/hooks";

import { NewTagWidget } from "./subcomponents";
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
        tags.map((tag) => <Removeable
          key={tag}
          remove={() => removeTag(tag)}
          removeCondition={true}
        >
          <TagComponent label={"" + tagsMap.get(tag)} />
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