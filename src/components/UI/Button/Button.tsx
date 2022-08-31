import React from "react";
import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import styles from "./Button.module.sass";

type ButtonProps = {
  children?: any,
  onClick: Function,
  className?: string
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  const currentTheme = useAppSelector(themeSelector);
  const onClickHandler = (_event: React.MouseEvent<HTMLElement>) => {
    onClick();
  }

  return (
    <button
      className={classNames(
        styles.body,
        getThemeStyle(styles, currentTheme),
        className
      )}
      onClick={onClickHandler}
    >
      {children}
    </button>
  )
}

export default Button