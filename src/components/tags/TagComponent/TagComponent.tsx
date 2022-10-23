import classNames from "classnames";

import { withTheme } from "src/HOCs";

import styles from "./TagComponent.module.sass";

import type { TagComponentProps } from "./TagComponentProps";


const TagComponent = ({ label, frequency, className }: TagComponentProps) => {
  return (
    <div className={classNames(styles.Tag, className)}>
      <div>{label}</div>
      {frequency !== 0 && frequency &&
        <div className={styles.frequency}>{frequency}</div>}
    </div>
  );
};

export default withTheme(TagComponent, styles);