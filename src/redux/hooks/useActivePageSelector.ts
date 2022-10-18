import { activePageSelector } from "../selectors";

import { useAppSelector } from "./";

const useActivePageSelector = () => {
  return useAppSelector(activePageSelector);
};

export default useActivePageSelector;