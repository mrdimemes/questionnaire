import { Questionnaire } from "src/models/questionnaire/Questionnaire";
import { useAppSelector } from "src/redux/hooks";
import { TagBar } from "src/components";
import { QuestionComponent } from "../QuestionComponent";

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

  return (
    <div>
      <h1>{questionnaire.label}</h1>
      <TagBar tags={questionnaire.tags.map((tagId) => {
        return { id: tagId, label: "" + tagsMap.get(tagId) }
      })} />
      <p>{questionnaire.about}</p>
      <div className="questoins"> {
        questionnaire.questions?.map((question) => {
          return <QuestionComponent key={question.id} {...question} />
        })
      } </div>
    </div>
  )
}

export default QuestionnaireComponent