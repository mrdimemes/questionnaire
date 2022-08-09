import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { Theme } from "src/redux/slices/themeSlice";
import styles from "./Tag.module.sass";

type TagProps = {
  label: string,
  freq?: number
}

const Tag = ({ label, freq }: TagProps) => {
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return (
    <div className={classNames(styles.body, {
      [styles.theme_light]: currentTheme === Theme.Light,
      [styles.theme_dark]: currentTheme === Theme.Dark
    })}>
      <div>{label}</div>
      {freq && <div className={classNames(styles.freq, {
        [styles.freq_theme_light]: currentTheme === Theme.Light,
        [styles.freq_theme_dark]: currentTheme === Theme.Dark
      })}>{freq}</div>}
    </div>
  )
}

export default Tag