import { RefObject } from "react";
import classNames from "classnames";
import { useThemeSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import type { SpecificInputProps } from "../types";
import styles from "./TextArea.module.sass";

interface TextAreaProps extends Omit<SpecificInputProps, "forwardedRef"> {
  forwardedRef?: RefObject<HTMLTextAreaElement>
}

const TextArea = (props: TextAreaProps) => {
  const currentTheme = useThemeSelector();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (props.onChange) props.onChange(event.target.value);
  }

  return (
    <textarea
      className={classNames(
        styles.TextArea,
        getThemeStyle(styles, currentTheme),
        props.className
      )}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      maxLength={props.maxLength}
      required={props.isRequired}
      ref={props.forwardedRef}
      onChange={handleChange}
    />
  )
}

export default TextArea