import classNames from "classnames";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import styles from "./LoadingSpinner.module.sass";

const LoadingSpinner = () => {
  const currentTheme = useAppSelector(themeSelector);

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