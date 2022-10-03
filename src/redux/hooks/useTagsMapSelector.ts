import { useAppSelector } from "./";
import { tagsMapSelector } from "../selectors";

const useTagsMapSelector = () => {
  return useAppSelector(tagsMapSelector);
}

export default useTagsMapSelector;