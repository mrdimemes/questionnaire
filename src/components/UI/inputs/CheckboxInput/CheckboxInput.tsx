import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { Input } from "../Input";
import styles from "./CheckboxInput.module.sass"

type CheckboxInputProp = {
  name: string,
  callback: (value: string) => void
}

const CheckboxInput = ({ name, callback }: CheckboxInputProp) => {
  const currentTheme = useAppSelector(themeSelector);

  return (
    <Input
      className={classNames(
        styles.CheckboxInput,
        getThemeStyle(styles, currentTheme)
      )}
      inputType="checkbox"
      name={name}
      callback={callback}
    />
  )
}

export default CheckboxInput