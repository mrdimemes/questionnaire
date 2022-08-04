import { Menu } from "../Menu";
import styles from "./Header.module.sass";

const Header = () => {
  return (
    <header className={styles.body}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.logo}>logo</div>
        <Menu />
      </div>
    </header>
  )
}

export default Header