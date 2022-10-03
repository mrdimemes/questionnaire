import { useAppSelector } from "./";
import { themeSelector } from "../selectors";

const useThemeSelector = () => {
  return useAppSelector(themeSelector);
}

export default useThemeSelector;