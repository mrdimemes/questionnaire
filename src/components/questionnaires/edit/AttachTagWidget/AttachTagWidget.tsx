import { useState, useRef } from "react";
import { Button, Select } from "src/components";
import { useTagsMapSelector } from "src/redux/hooks";
import styles from "./AttachTagWidget.module.sass";


type AttachTagWidgetProps = {
  callback: (tag: number) => void;
  ignoredTags: number[];
}

const AttachTagWidget = ({ callback, ignoredTags }: AttachTagWidgetProps) => {
  const tagsMap = useTagsMapSelector();
  const selectRef = useRef<HTMLSelectElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const getOptions = () => {
    const options = [] as [number, string][];
    for (const [value, text] of Array.from(tagsMap.entries())) {
      if (!ignoredTags.includes(value)) options.push([value, text]);
    }
    return options;
  }

  const toggleFocus = () => setIsFocused(!isFocused);
  const onSubmit = () => {
    const selectedTag = selectRef.current?.value;
    if (selectedTag) callback(Number(selectedTag));
    setIsFocused(false);
  }

  return (
    <div className={styles.widget}>
      <Button className={styles.focusButton} onClick={toggleFocus}>
        {isFocused ? "x" : "+"}
      </Button>
      {isFocused && <>
        <Select
          className={styles.input}
          name="tagSelect"
          forwardedRef={selectRef}
          options={getOptions()}
        />
        <Button onClick={onSubmit}>Добавить</Button>
      </>}
    </div>
  )
}

export default AttachTagWidget