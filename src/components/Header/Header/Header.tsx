import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { Theme } from "src/redux/slices/themeSlice";
import { Menu } from "../Menu";
import styles from "./Header.module.sass";

const Header = () => {
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return (
    <header className={classNames(
      styles.body,
      {
        [styles.theme_dark]: currentTheme === Theme.Dark,
        [styles.theme_light]: currentTheme === Theme.Light
      }
    )}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.logo}>Questions!</div>
        <Menu />
      </div>
    </header>
  )
}

export default Header