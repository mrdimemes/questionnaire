import { ChangeEvent } from "react";
import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import styles from "./Input.module.sass";
import type { InputProps } from "../types";

const Input = ({
  className,
  inputType,
  name,
  placeholder,
  callback,
  value,
  maxLength,
  isRequired }: InputProps
) => {
  const currentTheme = useAppSelector(themeSelector);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    callback(event.target.value);
  }

  return (
    <input
      className={classNames(
        styles.Input,
        getThemeStyle(styles, currentTheme),
        className
      )}
      type={inputType}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      maxLength={maxLength}
      required={isRequired}
    />
  )
}

export default Input