import classNames from "classnames";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { useAppSelector } from "src/redux/hooks";
import styles from "./LoadingSpinner.module.sass";

const LoadingSpinner = () => {
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={classNames(
          styles.body,
          getThemeStyle(styles, currentTheme)
        )} />
      </div>
    </div>
  )
}

export default LoadingSpinner