import { ChangeEvent } from "react";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import classNames from "classnames";
import styles from "./Input.module.sass";

type InputProps = {
  className?: string,
  inputType: string,
  name: string,
  placeholder?: string,
  callback: (value: string) => void
};

const Input = (
  { className, inputType, name, placeholder, callback }: InputProps
) => {
  const currentTheme = useAppSelector(themeSelector);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
    />
  )
}

export default Input