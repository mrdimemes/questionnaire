import { themeSelector } from "../selectors";

import { useAppSelector } from "./";

const useThemeSelector = () => {
  return useAppSelector(themeSelector);
};

export default useThemeSelector;