import { forwardRef } from "react";
import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { Input } from "../";
import styles from "./RadioInput.module.sass";
import type { SpecificInputProps } from "../types";


const RadioInput = forwardRef<HTMLInputElement, SpecificInputProps>(
  (props, ref) => {
    const currentTheme = useAppSelector(themeSelector);

    return <Input
      className={classNames(
        styles.body,
        getThemeStyle(styles, currentTheme),
        props.className
      )}
      inputType="radio"
      name={props.name}
      value={props.value}
      isRequired={props.isRequired}
      ref={ref}
    />
  }
);

RadioInput.displayName = "RadioInput";
export default RadioInput;