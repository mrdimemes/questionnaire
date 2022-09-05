import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { Input } from "../Input";
import styles from "./RadioInput.module.sass"

type RadioInputProp = {
  name: string,
  callback: (value: string) => void
}

const RadioInput = ({ name, callback }: RadioInputProp) => {
  const currentTheme = useAppSelector(themeSelector);

  return (
    <Input
      className={classNames(styles.body, getThemeStyle(styles, currentTheme))}
      inputType="radio"
      name={name}
      callback={callback}
    />
  )
}

export default RadioInput