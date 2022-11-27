import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { TagBar, Button } from "src/components";
import { withTheme } from "src/HOCs";
import { useUserAdminFlagSelector } from "src/redux/hooks";
import { QuestionnaireService } from "src/services";
import { executeWithConfirmation } from "src/utils/helpers";

import styles from "./QuestionnaireCardComponent.module.sass";

import type { QuestionnaireCardComponentProps } from "./types";


const QuestionnaireCardComponent = ({
  id,
  label,
  tags,
  className,
}: QuestionnaireCardComponentProps,
) => {
  const navigate = useNavigate();
  const isUserAdmin = useUserAdminFlagSelector();

  const removeQuestionnaire = () => {
    executeWithConfirmation(
      "Вы уверены что хотите удалить этот опрос?",
      () => QuestionnaireService.removeQuestionnaire(id),
    );
  };

  return (
    <div
      className={classNames(styles.QuestionnaireCard, className)}
      onClick={() => navigate("/questionnaire/" + id)}
    >

      <h2 className={styles.label}>{label}</h2>
      <TagBar tags={tags} />

      {
        isUserAdmin &&
        <div className={styles.adminBar}>
          <Button
            className={classNames(styles.icon, styles.editButton)}
            onClick={() => navigate("/edit/" + id)}
          />
          <Button
            className={classNames(styles.icon, styles.deleteButton)}
            onClick={removeQuestionnaire} />
        </div>
      }

    </div>
  );
};

export default withTheme(QuestionnaireCardComponent, styles);