import { useEffect, useState } from "react";
import api from "src/api";
import { FetchStatus, Question } from "src/models";
import { TagBar, Button, LoadingSpinner } from "src/components";
import { QuestionComponent } from "../QuestionComponent";
import styles from "./QuestionnaireComponent.module.sass";

type QuestionnaireProps = {
  id: number
};

const QuestionnaireComponent = ({ id }: QuestionnaireProps) => {
  const [status, setStatus] = useState(FetchStatus.Loading);
  const [label, setLabel] = useState<string>();
  const [tags, setTags] = useState([] as number[]);
  const [about, setAbout] = useState<string>();
  const [questions, setQuestions] = useState([] as Question[]);

  useEffect(() => {
    api.get("questionnaires/questionnaire/" + id).then(
      (res) => {
        setLabel(res.data.questionnaire.label);
        setTags(res.data.questionnaire.tags);
        setAbout(res.data.questionnaire.about);
        setQuestions(res.data.questionnaire.questions);
        setStatus(FetchStatus.Complete);
      }
    )
  }, []);

  // temporary placeholder
  const handleSubmit = () => { }

  return (
    <div>
      {status === FetchStatus.Loading && <LoadingSpinner />}
      {status === FetchStatus.Complete && <>
        <h1>{label}</h1>
        <TagBar className={styles.tags} tags={tags} />
        <p className={styles.about}>{about}</p>
        <div className={styles.questions}> {
          questions.map((question) => {
            return <QuestionComponent key={question.id} {...question} />
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