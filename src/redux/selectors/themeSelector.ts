import type { RootState } from "../store";

const themeSelector = (state: RootState) => {
  return state.theme.theme
};

export default themeSelector;