import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { Theme, getThemeStyle } from "src/redux/slices/themeSlice";
import styles from "./Tag.module.sass";

type TagProps = {
  label: string,
  freq?: number
}

const Tag = ({ label, freq }: TagProps) => {
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return (
    <div className={classNames(
      styles.body,
      getThemeStyle(styles, currentTheme)
    )}>
      <div>{label}</div>
      {freq && <div className={classNames(
        styles.freq,
        currentTheme === Theme.Light ?
          styles.freq_theme_light : styles.freq_theme_dark
      )}>{freq}</div>}
    </div>
  )
}

export default Tag