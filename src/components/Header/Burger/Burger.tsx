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
      className={classNames(styles.body, { [styles.opened]: isOpen })}
      onClick={onClick}
    />
  )
}

export default Burger