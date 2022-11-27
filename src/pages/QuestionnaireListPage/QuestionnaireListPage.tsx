import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { FetchStatus } from "src/models";
import { useAppDispatch, useTagsDataSelector } from "src/redux/hooks";
import { NavigationPage, setActivePage } from "src/redux/slices/browseSlice";
import { QuestionnaireGallery } from "src/components";
import { findTag } from "src/utils/helpers";

import { PageWrapper } from "../PageWrapper";


const QuestionnaireListPage = () => {
  const dispatch = useAppDispatch();
  const [tags, tagsFetchStatus] = useTagsDataSelector();
  const { tagId } = useParams();

  const filterTag = tagId && tagsFetchStatus === FetchStatus.Complete ?
    findTag(Number(tagId), tags) :
    null;

  useEffect(() => {
    dispatch(setActivePage(NavigationPage.QuestionnaireList));
  }, [dispatch]);

  return (
    <PageWrapper>
      <h1>Все опросы</h1>
      <QuestionnaireGallery filterTag={filterTag} />
    </PageWrapper>
  );
};

export default QuestionnaireListPage;