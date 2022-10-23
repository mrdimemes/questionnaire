import classNames from "classnames";

import { withTheme } from "src/HOCs";

import { Input } from "../";

import styles from "./RadioInput.module.sass";

import type { SpecificInputProps } from "../types";


const RadioInput = (props: SpecificInputProps) => {
  return <Input
    className={classNames(styles.RadioInput, props.className)}
    inputType="radio"
    name={props.name}
    value={props.value}
    isRequired={props.isRequired}
    forwardedRef={props.forwardedRef}
    onChange={props.onChange}
  />;
};

export default withTheme(RadioInput, styles);