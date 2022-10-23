import classNames from "classnames";

import { withTheme } from "src/HOCs";

import styles from "./TextArea.module.sass";

import type TextAreaProps from "./TextAreaProps";


const TextArea = (props: TextAreaProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (props.onChange) props.onChange(event.target.value);
  };

  return (
    <textarea
      className={classNames(styles.TextArea, props.className)}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      maxLength={props.maxLength}
      required={props.isRequired}
      ref={props.forwardedRef}
      onChange={handleChange}
    />
  );
};

export default withTheme(TextArea, styles);