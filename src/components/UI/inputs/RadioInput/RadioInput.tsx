import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { Input } from "../";
import styles from "./RadioInput.module.sass";
import type { SpecificInputProps } from "../types";


const RadioInput = (props: SpecificInputProps) => {
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
    forwardedRef={props.forwardedRef}
    onChange={props.onChange}
  />
}

export default RadioInput;