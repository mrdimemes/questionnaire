import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import { NavigationPage, setActivePage } from "src/redux/slices/browseSlice";

const TagsPage = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.tags.tags);

  useEffect(() => {
    dispatch(setActivePage(NavigationPage.Tags))
  }, [dispatch]);

  return (
    <div className="page wrapper">
      <h1>Все тэги</h1>
      <ul className="gallery"> {
        tags.map((tag) => {
          return <li key={tag.id}>{tag.label} - {tag.freq}</li>
        })
      } </ul>
    </div>
  )
}

export default TagsPage;