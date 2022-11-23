import { GalleryView } from "../../../../../models";


export type ViewSwitchProps = {
  setCurrentView: (view: GalleryView) => void,
  currentView: GalleryView,
  className?: string,
};