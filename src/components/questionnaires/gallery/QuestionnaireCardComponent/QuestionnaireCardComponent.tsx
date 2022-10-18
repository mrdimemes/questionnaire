import classNames from "classnames";
import { Link } from "react-router-dom";
import { useThemeSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { TagBar, Button } from "src/components";

import { QuestionnaireService } from "src/services";

import styles from "./QuestionnaireCardComponent.module.sass";

type QuestionnaireCardProps = {
  id: number,
  label: string,
  tags: number[]
}

const QuestionnaireCardComponent = ({
  id,
  label,
  tags }: QuestionnaireCardProps,
) => {
  const currentTheme = useThemeSelector();

  const removeQuestionnaire = () => {
    const warningText = "Вы уверены что хотите удалить этот опрос? Отменить эту операцию будет невозможно.";
    const confirmation = window.confirm(warningText);
    if (confirmation) {
      QuestionnaireService.removeQuestionnaire(id);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <Link
        to={"/questionnaire/" + id}
        className={classNames(
          styles.card,
          getThemeStyle(styles, currentTheme),
        )}
      >
        <h2 className={styles.label}>{label}</h2>
        <TagBar tags={tags} />
      </Link>
      <div className={styles.adminBar}>
        <Link to={"/edit/" + id} className={styles.button}>
          o
        </Link>
        <Button className={styles.button} onClick={removeQuestionnaire}>
          x
        </Button>
      </div>
    </div>
  );
};

export default QuestionnaireCardComponent;