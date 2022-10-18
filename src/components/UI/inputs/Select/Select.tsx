import classNames from "classnames";
import { RefObject } from "react";
import { useThemeSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";

import styles from "./Select.module.sass";

type SelectProps = {
  className?: string,
  name: string,
  forwardedRef?: RefObject<HTMLSelectElement>,
  options: [string | number, string][];
  onChange?: (value: string) => void;
}

const Select = (props: SelectProps) => {
  const currentTheme = useThemeSelector();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (props.onChange) props.onChange(event.target.value);
  };

  return (
    <select
      className={classNames(
        styles.Select,
        getThemeStyle(styles, currentTheme),
        props.className,
      )}
      name={props.name}
      ref={props.forwardedRef}
      onChange={handleChange}
    >
      {
        props.options.map(([value, text]) => {
          return <option key={value} value={value}>{text}</option>;
        })
      }
    </select>
  );
};

export default Select;