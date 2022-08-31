import classNames from "classnames";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { Theme, setTheme, getThemeStyle } from "src/redux/slices/themeSlice";
import { Button } from "src/components/UI/Button";
import styles from "./ThemeSwitchButton.module.sass";

const ThemeSwitchButton = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(themeSelector);

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