import { useContext } from "react";

import { Button } from "src/components";
import { Question, QuestionType } from "src/models";

import { QuestionnaireIdContext, CriticalContext } from "../../contexts";

import { QuestionsList } from "./subcomponents";
import styles from "./QuestionsEditor.module.sass";

import type { QuestionsEditorProps } from "./types";


const QuestionsEditor = ({
  questions,
  setQuestions,
  className,
}: QuestionsEditorProps) => {

  const questionnaireId = useContext(QuestionnaireIdContext);
  const critical = useContext(CriticalContext);

  const updateQuestion = (question: Question, index: number) => {
    const questionsCopy = [...questions];
    questionsCopy[index] = question;
    setQuestions(questionsCopy);
  };

  const removeQuestion = (index: number) => {
    critical();
    const questionsCopy = [] as Question[];
    questions.forEach((question: Question, idx: number) => {
      if (idx !== index) questionsCopy.push(question);
    });
    setQuestions(questionsCopy);
  };

  const addQuestion = () => {
    critical();
    const fields = [
      { id: 0, text: "Первый вариант" },
      { id: 0, text: "Второй вариант" },
    ];
    setQuestions([
      ...questions,
      new Question(0, QuestionType.Checkbox, "Новый вопрос", fields, false),
    ]);
  };

  return (
    <div className={className}>
      <h2>Вопросы</h2>

      {
        questionnaireId !== 0 &&
        <p className={styles.warningText}>
          Добавление и/или удаление вопросов и/или вариантов ответа
          повлечёт удаление данных уже собранных опросов!
        </p>
      }

      <QuestionsList
        questions={questions}
        update={updateQuestion}
        remove={removeQuestion}
      />

      <Button className={styles.addQuestionButton} onClick={addQuestion}>
        Добавить вопрос
      </Button>

    </div>
  );
};

export default QuestionsEditor;