import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { Menu } from "../Menu";
import styles from "./Header.module.sass";

const Header = () => {
  const currentTheme = useAppSelector(themeSelector);

  return (
    <header className={classNames(
      styles.body,
      getThemeStyle(styles, currentTheme)
    )}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.logo}>Questions!</div>
        <Menu />
      </div>
    </header>
  )
}

export default Header