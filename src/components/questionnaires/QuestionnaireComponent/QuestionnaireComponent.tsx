import { useState, useCallback } from "react";
import classNames from "classnames";

import { Questionnaire } from "src/models";
import { QuestionnaireService } from "src/services";
import { TagBar, Loadable } from "src/components";
import { withTheme } from "src/HOCs";

import { QuestionnaireForm } from "./QuestionnaireForm";
import styles from "./QuestionnaireComponent.module.sass";

import type { QuestionnaireComponentProps } from "./types";


const QuestionnaireComponent = ({
  id,
  className,
}: QuestionnaireComponentProps) => {

  const [questionnaire, setQuestionnaire] = useState({} as Questionnaire);

  const loadQuestionnaire = useCallback(async () => {
    const questionnaire = await QuestionnaireService.getQuestionnaire(id);
    setQuestionnaire(questionnaire);
  }, [id]);

  return (
    <Loadable load={loadQuestionnaire}>
      <div className={classNames(styles.QuestionnaireComponent, className)}>
        <h1>{questionnaire.label}</h1>
        <TagBar className={styles.tags} tags={questionnaire.tags} />
        <p className={styles.about}>{questionnaire.about}</p>
        <QuestionnaireForm
          questionnaireId={id}
          questions={questionnaire.questions}
        />
      </div>
    </Loadable>
  );
};

export default withTheme(QuestionnaireComponent, styles);