import { useEffect, useState } from "react";
import classNames from "classnames";
import { useThemeSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import {
  FetchStatus,
  Question,
  QuestionType,
  QuestionnaireChangeDTO
} from "src/models";
import { QuestionnaireService } from "src/services";
import { TextInput, TextArea, Button, LoadingSpinner } from "src/components";
import { TagEditBar, QuestionEditor } from "../";
import styles from "./QuestionnaireEditor.module.sass";


type QuestionnaireEditorProps = {
  id?: number
}

const QuestionnaireEditor = ({ id }: QuestionnaireEditorProps) => {
  const currentTheme = useThemeSelector();

  const [status, setStatus] = useState(FetchStatus.Loading);
  const [label, setLabel] = useState("Заголовок опроса");
  const [about, setAbout] = useState("Описание опроса");
  const [tags, setTags] = useState([] as number[]);
  const [questions, setQuestions] = useState([] as Question[]);

  const maxQuestions =
    Number(process.env.REACT_APP_MAX_QUESTIONS_PER_QUESTIONNAIRE ?? "100");
  const minQuestions = 1;

  const [isCriticalChange, setIsCriticalChange] = useState(false);

  const hangleLabelChange = (value: string) => setLabel(value);
  const hangleAboutChange = (value: string) => setAbout(value);
  const handleTagsChange = (tags: number[]) => setTags(tags);

  const handleQuestionChange = (
    updatedQuestion: Question,
    isCritical: boolean,
    index: number
  ) => {
    const newQuestions = [...questions];
    newQuestions[index] = updatedQuestion;
    if (isCritical) setIsCriticalChange(true);
    setQuestions(newQuestions);
  }
  const addField = () => {
    if (questions.length >= maxQuestions) return;
    setIsCriticalChange(true);
    setQuestions([
      ...questions,
      {
        id: 0,
        questionType: QuestionType.Checkbox,
        text: "Новый вопрос",
        fields: [
          { id: 0, text: "Первый вариант" },
          { id: 0, text: "Второй вариант" }
        ],
        isRequired: false
      }
    ]);
  }
  const removeQuestion = (index: number) => {
    if (questions.length <= minQuestions) return;
    setIsCriticalChange(true);
    const newQuestions = [] as Question[];
    questions.forEach((question, idx) => {
      if (idx !== index) newQuestions.push(question);
    });
    setQuestions(newQuestions);
  }

  const handleSubmit = () => {
    if (isCriticalChange) {
      const warningText = "Внесённые изменения повлекут удаление статистики по опросу старого образца. Вы уверены?";
      if (!window.confirm(warningText)) return;
    }
    const questionnaire = {
      id: id ?? 0,
      label,
      tags,
      about,
      questions
    };
    if (id) {
      QuestionnaireService.editQuestionnaire(new QuestionnaireChangeDTO(
        questionnaire,
        isCriticalChange
      ));
    } else {
      QuestionnaireService.addQuestionnaire(questionnaire);
    }
  }
  const handleRemove = () => {
    const warningText = "Вы уверены что хотите удалить этот опрос? Отменить эту операцию будет невозможно.";
    if (id && window.confirm(warningText)) {
      QuestionnaireService.removeQuestionnaire(id);
    }
  }

  useEffect(() => {
    if (id) {
      QuestionnaireService.getQuestionnaire(id).then(
        (questionnaire) => {
          setLabel(questionnaire.label);
          setAbout(questionnaire.about);
          setTags(questionnaire.tags);
          setQuestions(questionnaire.questions);
          setStatus(FetchStatus.Complete);
        }
      );
    } else {
      setStatus(FetchStatus.Complete);
    }
  }, [id]);

  return (
    <div className={classNames(
      styles.QuestionnaireEditor,
      getThemeStyle(styles, currentTheme)
    )}>
      {
        id && status === FetchStatus.Loading &&
        <LoadingSpinner />
      }

      {
        (!id || status === FetchStatus.Complete) &&
        <>
          <div className={styles.section}>
            <h2>Шапка опроса</h2>
            <div>
              <label htmlFor="label">Название</label>
              <TextInput
                name="label"
                value={label}
                onChange={hangleLabelChange}
              />
            </div>
            <div>
              <label htmlFor="about">Описание</label>
              <TextArea
                name="about"
                value={about}
                onChange={hangleAboutChange}
              />
            </div>
          </div>

          <div className={styles.section}>
            <TagEditBar tags={tags} callback={handleTagsChange} />
          </div>

          <div className={styles.section}>
            <h2>Вопросы</h2>
            {
              id &&
              <p>
                Добавление и/или удаление вопросов и/или вариантов ответа
                повлечёт удаление данных уже собранных опросов!
              </p>
            }
            <div className={styles.questions}>
              {
                questions.map((question, index) => {
                  return (
                    <div
                      className={styles.questionContainer}
                      key={`qc-${index}`}
                    >
                      <QuestionEditor
                        key={index}
                        question={question}
                        callback={(question, isCritical) => {
                          handleQuestionChange(question, isCritical, index)
                        }}
                      />
                      {
                        questions.length > minQuestions &&
                        <Button
                          className={styles.removeQuestionButton}
                          onClick={() => { removeQuestion(index) }}
                          children="Удалить вопрос"
                        />
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className={classNames(styles.section, styles.buttonsBar)}>
            {
              questions.length < maxQuestions &&
              <Button
                onClick={addField}
                children="Добавить вопрос"
              />
            }
            <Button
              onClick={handleSubmit}
              children="Сохранить изменения"
            />
            {
              id &&
              <Button
                onClick={handleRemove}
                children="Удалить опрос"
              />
            }

          </div>
        </>
      }

    </div>
  )
}

export default QuestionnaireEditor