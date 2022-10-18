import React from "react";
import classNames from "classnames";
import { useThemeSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";

import styles from "./Button.module.sass";

type ButtonProps = {
  children?: any,
  onClick: Function,
  className?: string
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  const currentTheme = useThemeSelector();
  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onClick();
  };

  return (
    <button
      className={classNames(
        styles.body,
        getThemeStyle(styles, currentTheme),
        className,
      )}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;