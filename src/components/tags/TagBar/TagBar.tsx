import classNames from "classnames";

import { TagComponent } from "src/components";
import { Tag } from "src/models";
import { useTagsMapSelector } from "src/redux/hooks";

import styles from "./TagBar.module.sass";

import type { TagBarProps } from "./types";


const TagBar = ({ className, tags }: TagBarProps) => {
  const tagsMap = useTagsMapSelector();

  return (
    <div className={classNames(styles.TagBar, className)}>
      {
        tags.map((tagId) => {
          return <TagComponent
            key={tagId}
            tag={tagsMap.get(tagId) ?? new Tag(-1, "Удалённый тег", 0)}
          />;
        })
      }
    </div>
  );
};

export default TagBar;