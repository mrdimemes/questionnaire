import classNames from "classnames";
import { useState, useRef } from "react";

import { Button, Select } from "src/components";
import { withTheme } from "src/HOCs";
import { useTagsMapSelector } from "src/redux/hooks";

import { getOptions } from "./helpers";
import styles from "./NewTagWidget.module.sass";

import type { NewTagWidgetProps } from "./types";


const NewTagWidget = ({
  className,
  callback,
  ignoredTags,
}: NewTagWidgetProps) => {

  const tagsMap = useTagsMapSelector();
  const selectRef = useRef<HTMLSelectElement>(null);

  const [isOpened, setIsOpened] = useState(false);
  const toggleIsOpened = () => setIsOpened(!isOpened);

  const onSubmit = () => {
    const selectedTag = selectRef.current?.value;
    if (selectedTag) callback(Number(selectedTag));
    setIsOpened(false);
  };

  return (
    <div className={classNames(
      styles.NewTagWidget,
      isOpened ? styles.opened : null,
      className,
    )}>
      <Button className={styles.openButton} onClick={toggleIsOpened} />
      <Select
        className={styles.selectInput}
        name="tagSelect"
        forwardedRef={selectRef}
        options={getOptions(tagsMap, ignoredTags)}
      />
      <Button className={styles.addButton} onClick={onSubmit}>Добавить</Button>
    </div>
  );
};

export default withTheme(NewTagWidget, styles);