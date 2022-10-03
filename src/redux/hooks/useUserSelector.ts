import { useAppSelector } from "./";
import { userSelector } from "../selectors";

const useUserSelector = () => {
  return useAppSelector(userSelector);
}

export default useUserSelector;