import { tagsMapSelector } from "../selectors";

import { useAppSelector } from "./";

const useTagsMapSelector = () => {
  return useAppSelector(tagsMapSelector);
};

export default useTagsMapSelector;