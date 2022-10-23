import classNames from "classnames";
import { useState, useRef } from "react";
import { Button, TextInput } from "src/components";
import { QuestionnaireService } from "src/services";
import { useAppDispatch } from "src/redux/hooks";
import { addTag } from "src/redux/slices/tagsSlice";

import styles from "./AddTagWidget.module.sass";

type AddTagWidgetProps = {
  className: string
}

const AddTagWidget = ({ className }: AddTagWidgetProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const toggleFocus = () => setIsFocused(!isFocused);

  const handleClick = () => {
    const label = inputRef.current?.value ?? "";
    if (label.length === 0) {
      return alert("Название тега не может быть пустым");
    }
    QuestionnaireService.addTag(label).then(response => {
      if (typeof response === "number") {
        dispatch(addTag({ id: response, label: label, frequency: 0 }));
      }
    });
    setIsFocused(false);
  };

  return <div className={classNames(styles.widget, className)}>
    <Button className={styles.focusButton} onClick={toggleFocus}>
      {isFocused ? "x" : "+"}
    </Button>
    {isFocused && <>
      <TextInput
        className={styles.input}
        name="tagLabel"
        forwardedRef={inputRef}
      />
      <Button onClick={handleClick}>Добавить</Button>
    </>}
  </div>;
};

export default AddTagWidget;