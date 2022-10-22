import classNames from "classnames";
import { withTheme } from "src/HOCs";

import { Menu } from "../Menu";

import styles from "./Header.module.sass";

import type { HeaderProps } from "./HeaderProps";


const Header = ({ className }: HeaderProps) => {
  return (
    <header className={classNames(styles.Header, className)}>
      <div className={classNames(styles.content, "wrapper")}>
        <div className={styles.logo}>Questions!</div>
        <Menu />
      </div>
    </header>
  );
};

export default withTheme(Header, styles);