import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { themeSelector } from "src/redux/selectors";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { Button } from "src/components/UI/Button";
import { GalleryViews } from "../QuestionnaireGallery/QuestionnaireGallery";
import Plates from "src/assets/images/icons/plates.svg";
import Rows from "src/assets/images/icons/rows.svg";
import styles from "./ViewSwitchButton.module.sass";

type ViewSwitchProps = {
  setCurrentView: (newView: GalleryViews) => void,
  currentView: GalleryViews
};

const ViewSwitchButton = (
  { setCurrentView, currentView }: ViewSwitchProps
) => {
  const currentTheme = useAppSelector(themeSelector);
  const toggleView = () => {
    switch (currentView) {
      case GalleryViews.Plates:
        setCurrentView(GalleryViews.Rows);
        break;
      case GalleryViews.Rows:
        setCurrentView(GalleryViews.Plates)
        break;
    }
  };

  return (
    <Button
      onClick={toggleView}
      className={classNames(
        styles.body,
        getThemeStyle(styles, currentTheme)
      )}
    >
      <img
        src={currentView === GalleryViews.Plates ? Rows : Plates}
        alt="view mode"
      />
    </Button>
  )
}

export default ViewSwitchButton