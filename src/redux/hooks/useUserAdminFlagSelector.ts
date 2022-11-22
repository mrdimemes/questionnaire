import { userAdminFlagSelector } from "../selectors";

import { useAppSelector } from "./";


const useUserAdminFlagSelector = () => {
  return useAppSelector(userAdminFlagSelector);
};

export default useUserAdminFlagSelector;