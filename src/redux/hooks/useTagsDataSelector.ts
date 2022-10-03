import { useAppSelector } from "./";
import { tagsDataSelector } from "../selectors";

const useTagsDataSelector = () => {
  return useAppSelector(tagsDataSelector);
}

export default useTagsDataSelector;