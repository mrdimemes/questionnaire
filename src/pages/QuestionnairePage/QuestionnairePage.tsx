import { useParams } from "react-router-dom";

import { QuestionnaireComponent } from "src/components";

import { PageWrapper } from "../PageWrapper";

const QuestionnairePage = () => {
  const { questionnaireId } = useParams();

  return (
    <PageWrapper>
      {questionnaireId &&
        <QuestionnaireComponent id={Number(questionnaireId)} />}
    </PageWrapper>
  );
};

export default QuestionnairePage;