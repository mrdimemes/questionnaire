import { useEffect } from "react";
import { useAppDispatch } from "src/redux/hooks";
import { PageWrapper } from "../PageWrapper";
import { NavigationPage, setActivePage } from "src/redux/slices/browseSlice";
import { QuestionnaireGallery } from "src/components";


const QuestionnaireListPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActivePage(NavigationPage.QuestionnaireList));
  }, [dispatch]);

  return (
    <PageWrapper>
      <h1>Все опросы</h1>
      <QuestionnaireGallery />
    </PageWrapper>
  )
}

export default QuestionnaireListPage;