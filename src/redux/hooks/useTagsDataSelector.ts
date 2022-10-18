import { tagsDataSelector } from "../selectors";

import { useAppSelector } from "./";

const useTagsDataSelector = () => {
  return useAppSelector(tagsDataSelector);
};

export default useTagsDataSelector;