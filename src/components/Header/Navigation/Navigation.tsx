import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { NavigationPage } from "src/redux/slices/browseSlice";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.sass";


const Navigation = () => {
  const activePage = useAppSelector((state) => state.browse.activePage);

  return (
    <nav className={styles.body}>

      <Link to="/" className={classNames(
        styles.link,
        { [styles.active]: activePage === NavigationPage.Main }
      )}>Главная</Link>

      <Link to="/questionnaires" className={classNames(
        styles.link,
        { [styles.active]: activePage === NavigationPage.QuestionnaireList }
      )}>Опросы</Link>

      <Link to="/tags" className={classNames(
        styles.link,
        { [styles.active]: activePage === NavigationPage.Tags }
      )}>Тэги</Link>

    </nav>
  )
}

export default Navigation;