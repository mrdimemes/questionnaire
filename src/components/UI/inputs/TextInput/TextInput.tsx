import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import styles from "./TextInput.module.sass"

type TextInputProp = {
  name: string
}

const TextInput = ({ name }: TextInputProp) => {
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return (
    <input
      className={classNames(styles.body, getThemeStyle(styles, currentTheme))}
      type="text"
      name={name}
    />
  )
}

export default TextInput