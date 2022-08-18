import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import styles from "./TextInput.module.sass"

const TextInput = () => {
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return (
    <input
      className={classNames(styles.body, getThemeStyle(styles, currentTheme))}
      type="text"
    />
  )
}

export default TextInput