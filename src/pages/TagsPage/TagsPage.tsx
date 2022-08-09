import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import { NavigationPage, setActivePage } from "src/redux/slices/browseSlice";
import { Tag } from "src/components";

const TagsPage = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.tags.tags);

  useEffect(() => {
    dispatch(setActivePage(NavigationPage.Tags))
  }, [dispatch]);

  return (
    <div className="page">
      <div className="wrapper">
        <h1>Все тэги</h1>
        <div className="gallery"> {
          tags.map((tag) => {
            return <Tag key={tag.id} label={tag.label} freq={tag.freq} />
          })
        } </div>
      </div>
    </div>
  )
}

export default TagsPage;