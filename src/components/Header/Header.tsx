import styles from "./Header.module.sass";

const Header = () => {
  return (
    <div className={styles.body}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.logo}>logo</div>
        <div className={styles.interactive}>
          <nav className={styles.navigation}>
            <a className={styles.link} href="#">Главная</a>
            <a className={styles.link} href="#">Тэги</a>
            <a className={styles.link} href="#">Опросы</a>
          </nav>
          <button>mode switch</button>
          <div>user</div>
        </div>
      </div>
    </div>
  )
}

export default Header