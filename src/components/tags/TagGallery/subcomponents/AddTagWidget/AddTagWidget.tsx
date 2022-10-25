import { useState } from "react";
import classNames from "classnames";

import { Button } from "src/components";
import { withTheme } from "src/HOCs";

import { AddTagForm } from "../";

import styles from "./AddTagWidget.module.sass";

import type { AddTagWidgetProps } from "./types/AddTagWidgetProps";


const AddTagWidget = ({ className }: AddTagWidgetProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleWidget = () => setIsOpened(!isOpened);

  return (
    <div className={classNames(
      styles.AddTagWidget,
      className,
      isOpened ? styles.opened : null,
    )}>
      <Button className={styles.switchButton} onClick={toggleWidget} />
      {isOpened && <AddTagForm />}
    </div>
  );
};

export default withTheme(AddTagWidget, styles);