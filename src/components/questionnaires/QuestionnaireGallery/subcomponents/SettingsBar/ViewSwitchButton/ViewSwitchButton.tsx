import classNames from "classnames";

import { Button } from "src/components";
import { withTheme } from "src/HOCs";

import { GalleryView } from "../../../models";

import styles from "./ViewSwitchButton.module.sass";

import type { ViewSwitchProps } from "./types";


const ViewSwitchButton = ({
  setCurrentView,
  currentView,
  className,
}: ViewSwitchProps) => {

  const toggleView = () => {
    setCurrentView(
      currentView === GalleryView.Plates ?
        GalleryView.Rows :
        GalleryView.Plates,
    );
  };

  return (
    <Button
      onClick={toggleView}
      className={classNames(
        styles.ViewSwitchButton,
        currentView === GalleryView.Plates ? styles.plates : styles.rows,
        className,
      )}
    />
  );
};

export default withTheme(ViewSwitchButton, styles);