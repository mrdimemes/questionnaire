import classNames from "classnames";
import { Link } from "react-router-dom";
import { useThemeSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { TagBar } from "src/components";
import styles from "./QuestionnaireCardComponent.module.sass";

type QuestionnaireCardProps = {
  id: number,
  label: string,
  tags: number[]
}

const QuestionnaireCardComponent = ({
  id,
  label,
  tags }: QuestionnaireCardProps
) => {
  const currentTheme = useThemeSelector();

  return (
    <Link
      to={"/questionnaire/" + id}
      className={classNames(styles.body, getThemeStyle(styles, currentTheme))}
    >
      <h2 className={styles.label}>{label}</h2>
      <TagBar tags={tags} />
    </Link>
  )
}

export default QuestionnaireCardComponent