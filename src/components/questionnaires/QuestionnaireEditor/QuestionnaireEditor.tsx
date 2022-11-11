import { useState, useCallback } from "react";
import classNames from "classnames";

import { Question, Questionnaire } from "src/models";
import { QuestionnaireService } from "src/services";
import { Loadable } from "src/components";
import { withTheme } from "src/HOCs";
import { executeWithConfirmation } from "src/utils/helpers";

import {
  QuestionnaireHeaderEditor,
  QuestionnaireTagsEditor,
  QuestionsEditor,
  Buttons,
} from "./subcomponents";
import { QuestionnaireIdContext, CriticalContext } from "./contexts";
import { applyChanges, applyCriticalChanges } from "./helpers";
import styles from "./QuestionnaireEditor.module.sass";

import type { QuestionnaireEditorProps } from "./types";


const QuestionnaireEditor = ({
  questionnaireId,
  className,
}: QuestionnaireEditorProps) => {

  const id = questionnaireId ?? 0;
  const [label, setLabel] = useState("Заголовок опроса");
  const [about, setAbout] = useState("Описание опроса");
  const [tags, setTags] = useState([] as number[]);
  const [questions, setQuestions] = useState([] as Question[]);

  const [isCriticalChange, setIsCriticalChange] = useState(false);
  const critical = () => setIsCriticalChange(true);

  const submit = () => {
    const questionnaire = new Questionnaire(id, label, tags, about, questions);
    if (id === 0) return QuestionnaireService.addQuestionnaire(questionnaire);
    if (isCriticalChange) return applyCriticalChanges(questionnaire);
    applyChanges(questionnaire);
  };

  const remove = () => executeWithConfirmation(
    "Вы уверены, что хотите удалить этот опрос?",
    () => QuestionnaireService.removeQuestionnaire(id),
  );

  const loadQuestionnaire = useCallback(async () => {
    if (id !== 0) {
      const questionnaire = await QuestionnaireService.getQuestionnaire(id);
      setLabel(questionnaire.label);
      setAbout(questionnaire.about);
      setTags(questionnaire.tags);
      setQuestions(questionnaire.questions);
    };
  }, [id]);

  return (
    <Loadable load={loadQuestionnaire}>
      <QuestionnaireIdContext.Provider value={id}>
        <CriticalContext.Provider value={critical}>
          <form className={classNames(styles.QuestionnaireEditor, className)}>

            <QuestionnaireHeaderEditor
              label={label}
              setLabel={setLabel}
              about={about}
              setAbout={setAbout}
              className={styles.section}
            />

            <QuestionnaireTagsEditor
              tags={tags}
              callback={setTags}
              className={styles.section}
            />

            <QuestionsEditor
              questions={questions}
              setQuestions={setQuestions}
              className={styles.section}
            />

            <Buttons
              className={styles.section}
              sumbit={submit}
              remove={remove}
            />

          </form>
        </CriticalContext.Provider>
      </QuestionnaireIdContext.Provider>
    </Loadable>
  );
};

export default withTheme(QuestionnaireEditor, styles);