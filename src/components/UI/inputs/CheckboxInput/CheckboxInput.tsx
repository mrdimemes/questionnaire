import classNames from "classnames";

import { withTheme } from "src/HOCs";

import { Input } from "../";

import styles from "./CheckboxInput.module.sass";

import type { SpecificInputProps } from "../types";


const CheckboxInput = (props: SpecificInputProps) => {
  return <Input
    className={classNames(styles.CheckboxInput, props.className)}
    inputType="checkbox"
    name={props.name}
    onChange={props.onChange}
    forwardedRef={props.forwardedRef}
  />;
};

export default withTheme(CheckboxInput, styles);