import React from "react";
import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { Theme } from "src/redux/slices/themeSlice";
import styles from "./Button.module.sass";

type ButtonProps = {
  children?: any,
  onClick: Function,
  className?: string
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  const currentTheme = useAppSelector((state) => state.theme.theme);
  const onClickHandler = (_event: React.MouseEvent<HTMLElement>) => {
    onClick();
  }

  return (
    <button
      className={classNames(
        styles.body,
        {
          [styles.theme_light]: currentTheme === Theme.Light,
          [styles.theme_dark]: currentTheme === Theme.Dark
        },
        className
      )}
      onClick={onClickHandler}
    >
      {children}
    </button>
  )
}

export default Button