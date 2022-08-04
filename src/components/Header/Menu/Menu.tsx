import { Navigation } from "../Navigation";
import { ThemeSwitchButton } from "../ThemeSwitchButton";
import styles from "./Menu.module.sass";

const Menu = () => {
  return (
    <div className={styles.body}>
      <Navigation />
      <ThemeSwitchButton />
      <div>user</div>
    </div>
  )
}

export default Menu