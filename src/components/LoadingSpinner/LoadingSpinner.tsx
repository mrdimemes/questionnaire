import classNames from "classnames";

import { withTheme } from "src/HOCs";

import styles from "./LoadingSpinner.module.sass";

import type { LoadingSpinnerProps } from "./types";

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <div className={classNames(styles.LoadingSpinner, className)}>
      <div className={styles.iconContainer}>
        <div className={styles.icon} />
      </div>
    </div>
  );
};

export default withTheme(LoadingSpinner, styles);