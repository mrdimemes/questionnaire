import { useParams } from "react-router-dom";
import { PageWrapper } from "../PageWrapper";
import { QuestionnaireComponent } from "src/components";

const QuestionnairePage = () => {
  const { questionnaireId } = useParams();

  return (
    <PageWrapper>
      {questionnaireId &&
        <QuestionnaireComponent id={Number(questionnaireId)} />}
    </PageWrapper>
  )
}

export default QuestionnairePage