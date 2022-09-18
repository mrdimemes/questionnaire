import { Button } from "src/components";
import styles from "./PageButton.module.sass";

type PageButtonProps = {
  isActivePage?: boolean;
  onClick: () => void;
  children: number
}

const PageButton = ({ isActivePage, onClick, children }: PageButtonProps) => {

  return (
    <Button
      className={isActivePage ? styles.active : undefined}
      onClick={onClick}
      children={children}
    />
  )
}

export default PageButton