import React from "react";
import styles from "./Button.module.sass";

type ButtonProps = {
  children: any,
  onClick: Function
}

const Button = ({ children, onClick }: ButtonProps) => {
  const onClickHandler = (_event: React.MouseEvent<HTMLElement>) => {
    onClick();
  }

  return (
    <button className={styles.body} onClick={onClickHandler}>
      {children}
    </button>
  )
}

export default Button