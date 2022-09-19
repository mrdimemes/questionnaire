import { useEffect, useRef } from "react";
import { useAppDispatch } from "src/redux/hooks";
import { PageWrapper } from "../PageWrapper";
import { NavigationPage, setActivePage } from "src/redux/slices/browseSlice";
import { TagGallery } from "src/components";

const TagsPage = () => {
  const dispatch = useAppDispatch();
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollUp = () => {
    pageRef.current?.scrollTo({ top: 0 });
  }

  useEffect(() => {
    dispatch(setActivePage(NavigationPage.Tags))
  }, [dispatch]);

  return (
    <PageWrapper pageRef={pageRef}>
      <h1>Все тэги</h1>
      <TagGallery resetScroll={scrollUp} />
    </PageWrapper>
  )
}

export default TagsPage;