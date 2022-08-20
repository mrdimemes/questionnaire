import { Questionnaire } from "src/models/questionnaire/Questionnaire";
import { useAppSelector } from "src/redux/hooks";
import { TagBar, Button } from "src/components";
import { QuestionComponent } from "../QuestionComponent";
import styles from "./QuestionnaireComponent.module.sass";

type QuestionnaireProps = {
  questionnaire: Questionnaire
};

const QuestionnaireComponent = ({ questionnaire }: QuestionnaireProps) => {

  const tagsMap = useAppSelector((state) => {
    const map = new Map<number, string>();
    for (const tag of state.tags.tags) {
      map.set(tag.id, tag.label)
    }
    return map
  });

  // temporary placeholder
  const handleSubmit = () => { }

  return (
    <div>
      <h1>{questionnaire.label}</h1>
      <TagBar className={styles.tags} tags={questionnaire.tags.map((tagId) => {
        return { id: tagId, label: "" + tagsMap.get(tagId) }
      })} />
      <p className={styles.about}>{questionnaire.about}</p>
      <div className={styles.questions}> {
        questionnaire.questions?.map((question) => {
          return <QuestionComponent key={question.id} {...question} />
        })
      } </div>
      <div className={styles.buttons}>
        <Button onClick={handleSubmit}>Закончить прохождение</Button>
      </div>
    </div>
  )
}

export default QuestionnaireComponent