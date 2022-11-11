import classNames from "classnames";

import { Button } from "src/components";
import { withTheme } from "src/HOCs";

import styles from "./Removeable.module.sass";

import type { RemoveableProps } from "./types";


const Removeable = ({
  className,
  children,
  removeCondition,
  remove,
  removeButtonText,
  removeButtonClassName,
}: RemoveableProps) => {
  return (
    <div className={classNames(styles.Removeable, className)}>
      {children}

      {
        removeCondition &&
        <Button
          className={removeButtonClassName ?? styles.removeButton}
          onClick={remove}
          children={removeButtonText}
        />
      }
    </div>
  );
};

export default withTheme(Removeable, styles);