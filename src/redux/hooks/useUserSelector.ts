import { userSelector } from "../selectors";

import { useAppSelector } from "./";

const useUserSelector = () => {
  return useAppSelector(userSelector);
};

export default useUserSelector;