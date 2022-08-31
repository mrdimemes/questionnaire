import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import styles from "./TextInput.module.sass"

type TextInputProp = {
  name: string
}

const TextInput = ({ name }: TextInputProp) => {
  const currentTheme = useAppSelector(themeSelector);

  return (
    <input
      className={classNames(styles.body, getThemeStyle(styles, currentTheme))}
      type="text"
      name={name}
    />
  )
}

export default TextInput