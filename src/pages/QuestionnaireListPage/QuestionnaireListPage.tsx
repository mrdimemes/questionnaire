import { useEffect } from "react";
import { useAppDispatch } from "src/redux/hooks";
import { NavigationPage, setActivePage } from "src/redux/slices/browseSlice";
import { QuestionnaireGallery } from "src/components";


const QuestionnaireListPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActivePage(NavigationPage.QuestionnaireList));
  }, [dispatch]);

  return (
    <div className="page">
      <div className="wrapper">
        <h1>Все опросы</h1>
        <QuestionnaireGallery />
      </div >
    </div >
  )
}

export default QuestionnaireListPage;