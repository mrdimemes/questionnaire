import { useEffect } from "react";
import { useAppDispatch } from "src/redux/hooks";
import { PageWrapper } from "../PageWrapper";
import { NavigationPage, setActivePage } from "src/redux/slices/browseSlice";

const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActivePage(NavigationPage.Main))
  }, [dispatch]);

  return (
    <PageWrapper>
      <h1>Главная</h1>
    </PageWrapper>
  )
}

export default MainPage;