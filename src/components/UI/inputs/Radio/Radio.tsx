import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import styles from "./Radio.module.sass"

const Radio = () => {
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return (
    <input
      className={classNames(styles.body, getThemeStyle(styles, currentTheme))}
      type="radio"
    />
  )
}

export default Radio