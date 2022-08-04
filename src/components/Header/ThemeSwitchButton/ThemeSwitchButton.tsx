import { useState } from "react";
import { Button } from "src/components/UI/Button";
import styles from "./ThemeSwitchButton.module.sass";
import LightThemeIcon from "src/assets/images/icons/light-mode-icon.svg";
import DarkThemeIcon from "src/assets/images/icons/dark-mode-icon.svg";

enum Themes {
  light = "LIGHT",
  dark = "DARK"
}

const ThemeSwitchButton = () => {
  const [theme, setTheme] = useState<Themes>(Themes.light);
  const toggleTheme = () => {
    if (theme === Themes.light) {
      setTheme(Themes.dark)
    } else {
      setTheme(Themes.light)
    }
  }

  return (
    <Button className={styles.body} onClick={toggleTheme}>
      <img
        className={styles.icon}
        src={theme === Themes.light ? LightThemeIcon : DarkThemeIcon}
        alt="switch theme"
      />
    </Button>
  )
}

export default ThemeSwitchButton;