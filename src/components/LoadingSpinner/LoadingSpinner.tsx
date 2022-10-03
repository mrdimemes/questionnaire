import classNames from "classnames";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { useThemeSelector } from "src/redux/hooks";
import styles from "./LoadingSpinner.module.sass";

const LoadingSpinner = () => {
  const currentTheme = useThemeSelector();

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