import { forwardRef } from "react";
import classNames from "classnames";
import { Input } from "../";
import styles from "./TextInput.module.sass";
import type { SpecificInputProps } from "../types";

const TextInput = forwardRef<HTMLInputElement, SpecificInputProps>(
  (props, ref) => {
    return <Input
      className={classNames(styles.TextInput, props.className)}
      inputType="text"
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
      isRequired={props.isRequired}
      ref={ref}
    />
  }
);

TextInput.displayName = "TextInput";
export default TextInput;