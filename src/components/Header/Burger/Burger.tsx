import classNames from "classnames";
import { Button } from "src/components/UI/Button";
import styles from "./Burger.module.sass";

type BurgerProps = {
  onClick: Function,
  isOpen: boolean
}

const Burger = ({ onClick, isOpen }: BurgerProps) => {
  return (
    <Button
      className={styles.body}
      onClick={onClick}
    >
      <div className={classNames(styles.icon, { [styles.opened]: isOpen })} />
    </Button>
  )
}

export default Burger