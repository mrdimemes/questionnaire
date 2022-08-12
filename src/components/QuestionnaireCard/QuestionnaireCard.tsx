import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { Theme } from "src/redux/slices/themeSlice";
import { Tag } from "src/components";
import styles from "./QuestionnaireCard.module.sass";

type QuestionnaireCardProps = {
  id: number,
  label: string,
  tags: {
    id: number,
    label: string
  }[]
}

const QuestionnaireCard = ({ id, label, tags }: QuestionnaireCardProps) => {
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return <div className={classNames(
    styles.body,
    {
      [styles.theme_dark]: currentTheme === Theme.Dark,
      [styles.theme_light]: currentTheme === Theme.Light
    }
  )}>
    <h2 className={styles.label}>{label}</h2>
    <div className={styles.tags}>{
      tags.map((tag) => {
        return <Tag key={`${id}_${tag.id}`} label={tag.label} />
      })
    }</div>
  </div>
}

export default QuestionnaireCard