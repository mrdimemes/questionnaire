import classNames from "classnames";
import { ThemeSwitchButton } from "src/components";
import { useAppSelector } from "src/redux/hooks";
import { NavigationPage } from "src/redux/slices/browseSlice";
import styles from "./Header.module.sass";

const Header = () => {
  const activePage = useAppSelector((state) => state.browse.activePage);

  return (
    <div className={styles.body}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.logo}>logo</div>
        <div className={styles.interactive}>
          <nav className={styles.navigation}>

            <a href="#" className={classNames(
              styles.link,
              { [styles.activeLink]: activePage === NavigationPage.Main }
            )}>Главная</a>

            <a href="#" className={classNames(
              styles.link,
              { [styles.activeLink]: activePage === NavigationPage.Tags }
            )}>Опросы</a>

            <a href="#" className={classNames(
              styles.link,
              { [styles.activeLink]: activePage === NavigationPage.QuestionnaireList }
            )}>Тэги</a>

          </nav>
          <ThemeSwitchButton />
          <div>user</div>
        </div>
      </div>
    </div>
  )
}

export default Header