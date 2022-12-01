import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const submit = () => {
    const questionnaire = new Questionnaire(id, label, tags, about, questions);
    if (id === 0) {
      QuestionnaireService.addQuestionnaire(questionnaire);
    } else {
      QuestionnaireService.editQuestionnaire(questionnaire);
    }
    navigate("/questionnaire-client");
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
          isQuestionnaireNew={id === 0}
        />

      </form>
    </Loadable>
  );
};

export default withTheme(QuestionnaireEditor, styles);