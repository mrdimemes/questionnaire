import { Tag } from "src/components";
import styles from "./QuestionnaireCard.module.sass";

type QuestionnaireCardProps = {
  id: number,
  label: string,
  tags: {
    id: number,
    label: string
  }[]
}

const QuestionnaireCard = ({ id, label, tags }: QuestionnaireCardProps) => {
  return <div>
    <h2 className={styles.label}>{label}</h2>
    <div className={styles.tags}>{
      tags.map((tag) => {
        return <Tag key={`${id}_${tag.id}`} label={tag.label} />
      })
    }</div>
  </div>
}

export default QuestionnaireCard