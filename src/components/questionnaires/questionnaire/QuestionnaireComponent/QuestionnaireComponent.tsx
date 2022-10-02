import { useEffect, useState, useCallback } from "react";
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

  const updateAnswer = useCallback((
    questionId: number,
    questionAnswersMap: Map<number, string>
  ) => {
    setAnswersMap(new Map(answersMap.set(questionId, questionAnswersMap)));
  }, []);

  const handleSubmit = () => {
    const answerDTO = getDTOFromState();
    QuestionnaireService.sendQuestionnaireAnswer(answerDTO)
      .then((status) => console.log(status));
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