import classNames from "classnames";

import { Button } from "src/components";
import { withTheme } from "src/HOCs";

import styles from "./BurgerMenuButton.module.sass";

import type { BurgerMenuButtonProps as Props } from "./BurgerMenuButtonProps";


const BurgerMenuButton = ({ onClick, isOpen, className }: Props) => {
  return (
    <Button
      className={classNames(
        styles.BurgerMenuButton,
        className,
        isOpen ? styles.opened : null,
      )}
      onClick={onClick}
    >
      <div className={styles.icon} />
    </Button>
  );
};

export default withTheme(BurgerMenuButton, styles);