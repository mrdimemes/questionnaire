import classNames from "classnames";

import { withTheme } from "src/HOCs";

import styles from "./Select.module.sass";

import { SelectProps } from "./SelectProps";


const Select = (props: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (props.onChange) props.onChange(event.target.value);
  };

  return (
    <select
      className={classNames(styles.Select, props.className)}
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

export default withTheme(Select, styles);