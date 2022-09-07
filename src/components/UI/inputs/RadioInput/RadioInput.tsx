import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { Input } from "../";
import styles from "./RadioInput.module.sass";
import type { SpecificInputProps } from "../types";

const RadioInput = ({
  className,
  name,
  value,
  callback,
  isRequired }: SpecificInputProps
) => {
  const currentTheme = useAppSelector(themeSelector);

  return (
    <Input
      className={classNames(
        styles.body,
        getThemeStyle(styles, currentTheme),
        className
      )}
      inputType="radio"
      name={name}
      value={value}
      callback={callback}
      isRequired={isRequired}
    />
  )
}

export default RadioInput