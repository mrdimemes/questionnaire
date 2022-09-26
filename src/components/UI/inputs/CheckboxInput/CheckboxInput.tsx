import { forwardRef } from "react";
import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { Input } from "../";
import styles from "./CheckboxInput.module.sass";
import type { SpecificInputProps } from "../types";

const CheckboxInput = forwardRef<HTMLInputElement, SpecificInputProps>(
  (props, ref) => {
    const currentTheme = useAppSelector(themeSelector);
    return <Input
      className={classNames(
        styles.CheckboxInput,
        getThemeStyle(styles, currentTheme),
        props.className
      )}
      inputType="checkbox"
      name={props.name}
      ref={ref}
    />
  }
);

CheckboxInput.displayName = "CheckboxInput";
export default CheckboxInput;