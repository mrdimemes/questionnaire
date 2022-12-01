import classNames from "classnames";

import styles from "./Field.module.sass";

import type { FieldProps } from "./types";


const Field = ({ className, fieldId, label, children }: FieldProps) => {

  return (
    <div className={classNames(styles.Field, className)}>
      {children}
      <label className={styles.label} htmlFor={"" + fieldId}>{label}</label>
    </div>
  );
};

export default Field;