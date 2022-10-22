import classNames from "classnames";
import { useState } from "react";

import { withTheme } from "src/HOCs";

import {
  Navigation,
  ThemeSwitchButton,
  BurgerMenuButton,
  UserPanel,
} from "../";

import styles from "./Menu.module.sass";

import { MenuProps } from "./MenuProps";


const Menu = ({ className }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classNames(styles.Menu, className)}>
      <BurgerMenuButton onClick={toggleIsOpen} isOpen={isOpen} />

      <div className={classNames(
        styles.container,
        isOpen ? styles.opened : null,
      )}>

        <Navigation />
        <div className={styles.bar}>
          <ThemeSwitchButton />
          <UserPanel />
        </div>

      </div>
    </div >
  );
};

export default withTheme(Menu, styles);