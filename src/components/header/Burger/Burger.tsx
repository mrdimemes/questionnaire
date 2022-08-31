import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { Button } from "src/components/UI/Button";
import styles from "./Burger.module.sass";

type BurgerProps = {
  onClick: Function,
  isOpen: boolean
}

const Burger = ({ onClick, isOpen }: BurgerProps) => {
  const currentTheme = useAppSelector(themeSelector);

  return (
    <Button
      className={styles.body}
      onClick={onClick}
    >
      <div className={classNames(
        styles.icon,
        { [styles.opened]: isOpen },
        getThemeStyle(styles, currentTheme)
      )} />
    </Button>
  )
}

export default Burger