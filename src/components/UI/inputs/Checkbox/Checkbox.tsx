import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import styles from "./Checkbox.module.sass"

type CheckboxProp = {
  name: string
}

const Checkbox = ({ name }: CheckboxProp) => {
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return (
    <input
      className={classNames(styles.body, getThemeStyle(styles, currentTheme))}
      type="checkbox"
      name={name}
    />
  )
}

export default Checkbox