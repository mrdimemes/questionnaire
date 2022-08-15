import { useEffect } from "react";
import { useAppDispatch } from "src/redux/hooks";
import { PageWrapper } from "../PageWrapper";
import { NavigationPage, setActivePage } from "src/redux/slices/browseSlice";
import { TagGallery } from "src/components";

const TagsPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActivePage(NavigationPage.Tags))
  }, [dispatch]);

  return (
    <PageWrapper>
      <h1>Все тэги</h1>
      <TagGallery />
    </PageWrapper>
  )
}

export default TagsPage;