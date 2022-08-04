import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import { Theme, setTheme } from "src/redux/slices/themeSlice";
import { Button } from "src/components/UI/Button";
import styles from "./ThemeSwitchButton.module.sass";
import LightThemeIcon from "src/assets/images/icons/light-mode-icon.svg";
import DarkThemeIcon from "src/assets/images/icons/dark-mode-icon.svg";


const ThemeSwitchButton = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.theme);

  const toggleTheme = () => {
    if (currentTheme === Theme.Light) {
      dispatch(setTheme(Theme.Dark))
    } else {
      dispatch(setTheme(Theme.Light))
    }
  }

  return (
    <Button className={styles.body} onClick={toggleTheme}>
      <img
        className={styles.icon}
        src={currentTheme === Theme.Light ? LightThemeIcon : DarkThemeIcon}
        alt="switch theme"
      />
    </Button>
  )
}

export default ThemeSwitchButton;