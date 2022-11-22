import { userNameSelector } from "../selectors";

import { useAppSelector } from "./";


const useUserNameSelector = () => {
  return useAppSelector(userNameSelector);
};

export default useUserNameSelector;