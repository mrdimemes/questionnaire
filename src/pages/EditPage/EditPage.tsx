import { useParams } from "react-router-dom";
import { QuestionnaireEditor } from "src/components";

import { PageWrapper } from "../PageWrapper";

const AuthPage = () => {
  const { questionnaireId } = useParams();

  return (
    <PageWrapper>
      <h1>Edit Page</h1>
      <QuestionnaireEditor
        questionnaireId={questionnaireId ? Number(questionnaireId) : undefined}
      />
    </PageWrapper>
  );
};

export default AuthPage;