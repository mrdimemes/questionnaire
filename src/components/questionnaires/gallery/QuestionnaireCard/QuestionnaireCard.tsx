import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { TagBar } from "src/components";
import styles from "./QuestionnaireCard.module.sass";

type QuestionnaireCardProps = {
  label: string,
  tags: {
    id: number,
    label: string
  }[]
}

const QuestionnaireCard = ({ label, tags }: QuestionnaireCardProps) => {
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return <div className={classNames(
    styles.body,
    getThemeStyle(styles, currentTheme)
  )}>
    <h2 className={styles.label}>{label}</h2>
    <TagBar tags={tags} />
  </div>
}

export default QuestionnaireCard