import { useEffect, useState, useRef } from "react";
import {
  FetchStatus,
  Questionnaire,
  QuestionnaireAnswerDTO,
  QuestionAnswerDTO,
  FieldAnswerDTO
} from "src/models";
import { QuestionnaireService } from "src/services";
import { TagBar, Button, LoadingSpinner } from "src/components";
import { QuestionComponent } from "../QuestionComponent";
import styles from "./QuestionnaireComponent.module.sass";

type QuestionnaireProps = {
  id: number
};
type AnswersMap = Map<number, Map<number, string>>;

const QuestionnaireComponent = ({ id }: QuestionnaireProps) => {
  const [questionnaire, setQuestionnaire] = useState({} as Questionnaire)
  const [status, setStatus] = useState(FetchStatus.Loading);
  const [answersMap, setAnswersMap] = useState<AnswersMap>(new Map());
  const [submitTrigger, setSubmitTrigger] = useState(false);
  const updatedQuestionsCounter = useRef(0);

  const toggleTrigger = () => setSubmitTrigger(!submitTrigger);
  const increaseUpdatedQuestionsCounter = () => {
    updatedQuestionsCounter.current++;
  }
  const resetUpdatedQuestionsCounter = () => {
    updatedQuestionsCounter.current = 0;
  }
  const updateAnswer = (
    questionId: number,
    questionAnswersMap: Map<number, string>
  ) => {
    setAnswersMap(answersMap.set(questionId, questionAnswersMap));
    increaseUpdatedQuestionsCounter();
  }

  const waitForQuestionsValues = () => {
    if (updatedQuestionsCounter.current !== questionnaire.questions.length) {
      setTimeout(waitForQuestionsValues, 100);
    }
  }

  const handleSubmit = () => {
    resetUpdatedQuestionsCounter();
    toggleTrigger();
    waitForQuestionsValues();
    console.log(answersMap);
  }

  const getDTOFromState = () => {
    const getFields = (questionId: number) => {
      const DTOs = [] as FieldAnswerDTO[];
      answersMap.get(questionId)?.forEach((value: string, fieldId: number) => {
        DTOs.push(new FieldAnswerDTO(fieldId, value));
      });
      return DTOs;
    }
    return new QuestionnaireAnswerDTO(
      questionnaire.id,
      questionnaire.questions.map(question => {
        return new QuestionAnswerDTO(
          question.id,
          question.questionType,
          getFields(question.id),
          question.isRequired
        );
      })
    );
  }

  useEffect(() => {
    QuestionnaireService.getQuestionnaire(id).then(
      (questionnaire) => {
        setQuestionnaire(questionnaire);
        setStatus(FetchStatus.Complete);
      }
    )
  }, [id]);

  return (
    <div>
      {status === FetchStatus.Loading && <LoadingSpinner />}
      {status === FetchStatus.Complete && <>
        <h1>{questionnaire.label}</h1>
        <TagBar className={styles.tags} tags={questionnaire.tags} />
        <p className={styles.about}>{questionnaire.about}</p>

        <div className={styles.questions}> {
          questionnaire.questions.map((question) => {
            return <QuestionComponent
              key={question.id}
              callback={updateAnswer}
              submitTrigger={submitTrigger}
              {...question} />
          })
        } </div>

        <div className={styles.buttons}>
          <Button onClick={handleSubmit}>Закончить прохождение</Button>
        </div>
      </>}
    </div>
  )
}

export default QuestionnaireComponent