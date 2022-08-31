import axios from "axios";
import { useEffect, useState } from "react";
import { Question } from "src/models/questionnaire/Question";
import { TagBar, Button } from "src/components";
import { QuestionComponent } from "../QuestionComponent";
import styles from "./QuestionnaireComponent.module.sass";

type QuestionnaireProps = {
  id: number
};

enum FetchStatus {
  Loading = "LOADING",
  Complete = "COMPLETE",
  Error = "ERROR"
}

const QuestionnaireComponent = ({ id }: QuestionnaireProps) => {
  const [status, setStatus] = useState(FetchStatus.Loading);
  const [label, setLabel] = useState<string>();
  const [tags, setTags] = useState([] as number[]);
  const [about, setAbout] = useState<string>();
  const [questions, setQuestions] = useState([] as Question[]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL +
      "questionnaires/questionnaire/" + id).then(
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