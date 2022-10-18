import classNames from "classnames";

import { Input } from "../";

import styles from "./EmailInput.module.sass";

import type { SpecificInputProps } from "../types";

const EmailInput = (props: SpecificInputProps) => {
  return <Input
    className={classNames(styles.EmailInput, props.className)}
    inputType="email"
    name={props.name}
    placeholder={props.placeholder}
    maxLength={
      props.maxLength ??
      Number(process.env.REACT_APP_MAX_EMAIL_LENGTH ?? "30")}
    isRequired={props.isRequired ?? true}
    forwardedRef={props.forwardedRef}
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
  />;
};

export default EmailInput;