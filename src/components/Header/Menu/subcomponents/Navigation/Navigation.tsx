import classNames from "classnames";
import { useActivePageSelector } from "src/redux/hooks";
import { NavigationPage } from "src/redux/slices/browseSlice";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.sass";

import type { NavigationProps } from "./types";


const Navigation = ({ onClick }: NavigationProps) => {
  const activePage = useActivePageSelector();

  return (
    <nav className={styles.Navigation}>

      <Link
        to="/"
        className={classNames(
          styles.link,
          { [styles.active]: activePage === NavigationPage.Main },
        )}
        onClick={onClick}
      >
        Главная
      </Link>

      <Link
        to="/questionnaires"
        className={classNames(
          styles.link,
          { [styles.active]: activePage === NavigationPage.QuestionnaireList },
        )}
        onClick={onClick}
      >
        Опросы
      </Link>

      <Link
        to="/tags"
        className={classNames(
          styles.link,
          { [styles.active]: activePage === NavigationPage.Tags },
        )}
        onClick={onClick}
      >
        Тэги
      </Link>

    </nav>
  );
};

export default Navigation;