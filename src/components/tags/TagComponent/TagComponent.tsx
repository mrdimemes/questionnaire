import classNames from "classnames";
import { useThemeSelector } from "src/redux/hooks";
import { Theme, getThemeStyle } from "src/redux/slices/themeSlice";
import styles from "./TagComponent.module.sass";

type TagProps = {
  label: string,
  freq?: number
}

const TagComponent = ({ label, freq }: TagProps) => {
  const currentTheme = useThemeSelector();

  return (
    <div className={classNames(
      styles.body,
      getThemeStyle(styles, currentTheme)
    )}>
      <div>{label}</div>
      {Number.isInteger(freq) && <div className={classNames(
        styles.freq,
        currentTheme === Theme.Light ?
          styles.freq_theme_light : styles.freq_theme_dark
      )}>{freq}</div>}
    </div>
  )
}

export default TagComponent