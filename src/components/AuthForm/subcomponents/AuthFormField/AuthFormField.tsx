import classNames from "classnames";

import { withTheme } from "src/HOCs";

import styles from "./AuthFormField.module.sass";

import type { AuthFormFieldProps } from "./types";


const AuthFormField = ({
  name,
  value,
  setValue,
  error,
  Input,
  label,
  required,
  className,
}: AuthFormFieldProps) => {

  return (
    <div className={classNames(styles.AuthFormField, className)}>
      <div className={styles.header}>
        <label
          className={required ? styles.required : null}
          htmlFor={name}
        >
          {label}
        </label>
        <div className={styles.error}>{error}</div>
      </div>
      <Input name={name} value={value} onChange={setValue} />
    </div>
  );
};

export default withTheme(AuthFormField, styles);