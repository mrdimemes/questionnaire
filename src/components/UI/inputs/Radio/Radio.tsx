import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import styles from "./Radio.module.sass"

type RadioProp = {
  name: string
}

const Radio = ({ name }: RadioProp) => {
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return (
    <input
      className={classNames(styles.body, getThemeStyle(styles, currentTheme))}
      type="radio"
      name={name}
    />
  )
}

export default Radio