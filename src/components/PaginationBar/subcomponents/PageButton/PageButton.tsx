import { Button } from "src/components";

import styles from "./PageButton.module.sass";

import type {PageButtonProps} from "./types";


const PageButton = ({ isActive, onClick, children }: PageButtonProps) => {
  return (
    <Button
      className={isActive ? styles.active : undefined}
      onClick={onClick}
      children={children}
    />
  );
};

export default PageButton;