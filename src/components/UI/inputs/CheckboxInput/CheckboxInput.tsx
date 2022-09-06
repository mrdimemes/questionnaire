import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { Input } from "../Input";
import styles from "./CheckboxInput.module.sass";
import type { SpecificInputProps } from "../types";

const CheckboxInput = ({ name, value, callback }: SpecificInputProps) => {
  const currentTheme = useAppSelector(themeSelector);

  return (
    <Input
      className={classNames(
        styles.CheckboxInput,
        getThemeStyle(styles, currentTheme)
      )}
      inputType="checkbox"
      name={name}
      value={value}
      callback={callback}
    />
  )
}

export default CheckboxInput