import React from "react";
import classNames from "classnames";
import styles from "./Button.module.sass";

type ButtonProps = {
  children: any,
  onClick: Function,
  className?: string
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  const onClickHandler = (_event: React.MouseEvent<HTMLElement>) => {
    onClick();
  }

  return (
    <button
      className={classNames(styles.body, className)}
      onClick={onClickHandler}
    >
      {children}
    </button>
  )
}

export default Button