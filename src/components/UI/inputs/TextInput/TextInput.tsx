import classNames from "classnames";
import { Input } from "../";
import styles from "./TextInput.module.sass";
import type { SpecificInputProps } from "../types";

const TextInput = (props: SpecificInputProps) => {
  return <Input
    className={classNames(styles.TextInput, props.className)}
    inputType="text"
    name={props.name}
    value={props.value}
    placeholder={props.placeholder}
    maxLength={props.maxLength}
    isRequired={props.isRequired}
    forwardedRef={props.forwardedRef}
    onChange={props.onChange}
  />
}

export default TextInput;