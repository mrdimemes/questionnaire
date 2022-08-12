import classNames from "classnames";
import { useAppSelector } from "src/redux/hooks";
import { getThemeStyle } from "src/redux/slices/themeSlice";
import { Button } from "src/components/UI/Button";
import { GalleryViews } from "../QuestionnaireGallery/QuestionnaireGallery";
import styles from "./QuestionnaireGalleryViewSwitchButton.module.sass";

type ViewSwitchProps = {
  setCurrentView: (newView: GalleryViews) => void,
  currentView: GalleryViews
};

const QuestionnaireGalleryViewSwitchButton = (
  { setCurrentView, currentView }: ViewSwitchProps
) => {
  const currentTheme = useAppSelector((state) => state.theme.theme);

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
        getThemeStyle(styles, currentTheme),
        currentView === GalleryViews.Plates ? styles.view_plates : styles.view_rows
      )}
    > ViewSwitch </Button>
  )
}

export default QuestionnaireGalleryViewSwitchButton