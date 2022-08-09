import { useEffect } from "react";
import { useAppDispatch } from "src/redux/hooks";
import { NavigationPage, setActivePage } from "src/redux/slices/browseSlice";
import { TagGallery } from "src/components";

const TagsPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActivePage(NavigationPage.Tags))
  }, [dispatch]);

  return (
    <div className="page">
      <div className="wrapper">
        <h1>Все тэги</h1>
        <TagGallery />
      </div>
    </div>
  )
}

export default TagsPage;