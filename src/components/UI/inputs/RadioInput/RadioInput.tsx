import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { Input } from "../Input";
import styles from "./RadioInput.module.sass";
import type { SpecificInputProps } from "../types";

const RadioInput = ({ name, value, callback }: SpecificInputProps) => {
  const currentTheme = useAppSelector(themeSelector);

  return (
    <Input
      className={classNames(styles.body, getThemeStyle(styles, currentTheme))}
      inputType="radio"
      name={name}
      value={value}
      callback={callback}
    />
  )
}

export default RadioInput