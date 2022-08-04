import classNames from "classnames";
import { useState } from "react";
import { Navigation, ThemeSwitchButton, Burger } from "../";
import styles from "./Menu.module.sass";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.body}>
      <div className={
        classNames(styles.interactive, { [styles.opened]: isOpen })
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