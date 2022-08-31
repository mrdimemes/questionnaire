import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import styles from "./Checkbox.module.sass"

type CheckboxProp = {
  name: string
}

const Checkbox = ({ name }: CheckboxProp) => {
  const currentTheme = useAppSelector(themeSelector);

  return (
    <input
      className={classNames(styles.body, getThemeStyle(styles, currentTheme))}
      type="checkbox"
      name={name}
    />
  )
}

export default Checkbox