import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { Theme } from "src/redux/slices/themeSlice";
import { useState } from "react";
import { Navigation, ThemeSwitchButton, Burger } from "../";
import styles from "./Menu.module.sass";

const Menu = () => {
  const currentTheme = useAppSelector((state) => state.theme.theme);
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.body}>
      <div className={classNames(
        styles.interactive,
        {
          [styles.opened]: isOpen,
          [styles.theme_dark]: currentTheme === Theme.Dark,
          [styles.theme_light]: currentTheme === Theme.Light
        })
      }>
        <Navigation />
        <div className={styles.meta}>
          <ThemeSwitchButton />
          <div>user</div>
        </div>
      </div>
      <Burger onClick={toggleIsOpen} isOpen={isOpen} />
    </div>
  )
}

export default Menu