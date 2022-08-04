import { useState, MouseEvent } from "react";
import classNames from "classnames";
import styles from "./Burger.module.sass";

const Burger = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => {
    setIsActive(!isActive)
  }
  const onClickHandler = (_event: MouseEvent<HTMLElement>) => {
    toggleIsActive()
  }

  return (
    <div onClick={onClickHandler} className={classNames(styles.body, { "active": isActive })}>
      <span className={classNames(styles.centerStick, { "active": isActive })} />
    </div>
  )
}

export default Burger