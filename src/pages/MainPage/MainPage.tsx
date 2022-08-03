import { useEffect } from "react";
import { useAppDispatch } from "src/redux/hooks";
import { NavigationPage, setActivePage } from "src/redux/slices/browseSlice";

const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActivePage(NavigationPage.Main))
  }, [dispatch]);

  return (
    <div className="page">
      <div className="wrapper">
        <h1>Главная</h1>
      </div>
    </div>
  )
}

export default MainPage;