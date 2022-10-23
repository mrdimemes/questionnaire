import classNames from "classnames";

import { TagComponent } from "src/components";
import { useTagsMapSelector } from "src/redux/hooks";

import styles from "./TagBar.module.sass";

import { TagBarProps } from "./TagBarProps";


const TagBar = ({ className, tags }: TagBarProps) => {
  const tagsMap = useTagsMapSelector();

  return (
    <div className={classNames(styles.TagBar, className)}>
      {
        tags.map((tagId) => {
          return <TagComponent
            key={tagId}
            label={tagsMap.get(tagId) ?? "Удалённый тэг"} />;
        })
      }
    </div>
  );
};

export default TagBar;