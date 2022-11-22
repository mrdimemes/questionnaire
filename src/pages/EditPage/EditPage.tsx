import { useParams } from "react-router-dom";
import {
  QuestionnaireEditor,
  AccessDeniedErrorComponent,
} from "src/components";
import { useUserAdminFlagSelector } from "src/redux/hooks";

import { PageWrapper } from "../PageWrapper";

const AuthPage = () => {
  const { questionnaireId } = useParams();
  const isUserAdmin = useUserAdminFlagSelector();

  return (
    <PageWrapper>
      {
        isUserAdmin ?
          <>
            <h1>Edit Page</h1>
            <QuestionnaireEditor
              questionnaireId={
                questionnaireId ?
                  Number(questionnaireId)
                  : undefined
              }
            />
          </> :
          <AccessDeniedErrorComponent />
      }
    </PageWrapper>
  );
};

export default AuthPage;