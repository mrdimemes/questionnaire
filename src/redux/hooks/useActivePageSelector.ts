import { useAppSelector } from "./";
import { activePageSelector } from "../selectors";

const useActivePageSelector = () => {
  return useAppSelector(activePageSelector);
}

export default useActivePageSelector;