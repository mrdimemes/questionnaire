import { userIdSelector } from "../selectors";

import { useAppSelector } from "./";


const useUserIdSelector = () => {
  return useAppSelector(userIdSelector);
};

export default useUserIdSelector;