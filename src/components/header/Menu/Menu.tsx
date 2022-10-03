import classNames from "classnames";
import { useThemeSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { useState } from "react";
import { Navigation, ThemeSwitchButton, Burger, User } from "../";
import styles from "./Menu.module.sass";

const Menu = () => {
  const currentTheme = useThemeSelector();
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.body}>
      <div className={classNames(
        styles.interactive,
        { [styles.opened]: isOpen },
        getThemeStyle(styles, currentTheme)
      )}>
        <Navigation />
        <div className={styles.meta}>
          <ThemeSwitchButton />
          <User />
        </div>
      </div>
      <Burger onClick={toggleIsOpen} isOpen={isOpen} />
    </div>
  )
}

export default Menu