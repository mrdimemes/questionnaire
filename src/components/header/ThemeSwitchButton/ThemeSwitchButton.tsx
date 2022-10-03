import classNames from "classnames";
import { useThemeSelector, useAppDispatch } from "src/redux/hooks";
import { Theme, setTheme, getThemeStyle } from "src/redux/slices/themeSlice";
import { Button } from "src/components/UI/Button";
import styles from "./ThemeSwitchButton.module.sass";

const ThemeSwitchButton = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useThemeSelector();

  const toggleTheme = () => {
    if (currentTheme === Theme.Light) {
      dispatch(setTheme(Theme.Dark))
    } else {
      dispatch(setTheme(Theme.Light))
    }
  }

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(
        styles.body,
        getThemeStyle(styles, currentTheme)
      )}
    />
  )
}

export default ThemeSwitchButton;