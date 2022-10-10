import classNames from "classnames";
import { Link } from "react-router-dom";
import { useThemeSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { TagBar, Button } from "src/components";
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

  const removeQuestionnaire = () => {

  }

  return (
    <div className={styles.cardContainer}>
      <Link
        to={"/questionnaire/" + id}
        className={classNames(
          styles.card,
          getThemeStyle(styles, currentTheme)
        )}
      >
        <h2 className={styles.label}>{label}</h2>
        <TagBar tags={tags} />
      </Link>
      <div className={styles.adminBar}>
        <Button className={styles.button} onClick={() => { }}>
          o
        </Button>
        <Button className={styles.button} onClick={removeQuestionnaire}>
          x
        </Button>
      </div>
    </div>
  )
}

export default QuestionnaireCardComponent