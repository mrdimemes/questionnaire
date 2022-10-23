import React from "react";
import classNames from "classnames";
import { withTheme } from "src/HOCs";

import styles from "./Button.module.sass";

import { ButtonProps } from "./ButtonProps";


const Button = ({ children, onClick, className }: ButtonProps) => {
  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onClick();
  };

  return (
    <button
      className={classNames(styles.Button, className)}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default withTheme(Button, styles);