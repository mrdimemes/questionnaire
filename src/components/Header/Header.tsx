import classNames from "classnames";
import { ThemeSwitchButton } from "src/components";
import { Link } from "react-router-dom";
import { useAppSelector } from "src/redux/hooks";
import { NavigationPage } from "src/redux/slices/browseSlice";
import styles from "./Header.module.sass";

const Header = () => {
  const activePage = useAppSelector((state) => state.browse.activePage);

  return (
    <header className={styles.body}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.logo}>logo</div>
        <div className={styles.interactive}>
          <nav className={styles.navigation}>

            <Link to="/" className={classNames(
              styles.link,
              { [styles.activeLink]: activePage === NavigationPage.Main }
            )}>Главная</Link>

            <Link to="/questionnaires" className={classNames(
              styles.link,
              { [styles.activeLink]: activePage === NavigationPage.QuestionnaireList }
            )}>Опросы</Link>

            <Link to="/tags" className={classNames(
              styles.link,
              { [styles.activeLink]: activePage === NavigationPage.Tags }
            )}>Тэги</Link>

          </nav>
          <ThemeSwitchButton />
          <div>user</div>
        </div>
      </div>
    </header>
  )
}

export default Header