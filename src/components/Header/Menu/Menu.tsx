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
      <Navigation />
      <ThemeSwitchButton />
      <div>user</div>
      <Burger onClick={toggleIsOpen} isOpen={isOpen} />
    </div>
  )
}

export default Menu