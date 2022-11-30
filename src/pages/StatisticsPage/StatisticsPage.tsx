import { UserStatistics, AccessDeniedErrorComponent } from "src/components";
import { useUserIdSelector } from "src/redux/hooks";

import { PageWrapper } from "../PageWrapper";


const StatisticsPage = () => {
  const userId = useUserIdSelector();

  return (
    <PageWrapper>
      {
        userId !== null ?
          <>
            <h1>Персональная статистика</h1>
            <UserStatistics userId={userId} />
          </> :
          <AccessDeniedErrorComponent />
      }
    </PageWrapper>
  );
};

export default StatisticsPage;