import type { RootState } from "../";

const themeSelector = (state: RootState) => {
  return state.theme.theme;
};

export default themeSelector;