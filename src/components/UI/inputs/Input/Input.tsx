import React from "react";
import classNames from "classnames";

import { withTheme } from "src/HOCs";

import styles from "./Input.module.sass";

import type { InputProps } from "../types";


const Input = (props: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(event.target.value);
  };
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (props.onFocus) props.onFocus(event.target.value);
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (props.onBlur) props.onBlur(event.target.value);
  };

  return <input
    className={classNames(styles.Input, props.className)}
    type={props.inputType}
    name={props.name}
    placeholder={props.placeholder}
    value={props.value}
    maxLength={props.maxLength}
    required={props.isRequired}
    ref={props.forwardedRef}
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    autoFocus={props.autoFocus}
  />;
};

export default withTheme(Input, styles);