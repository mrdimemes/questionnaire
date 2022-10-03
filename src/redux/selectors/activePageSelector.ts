import type { RootState } from "../";

const activePageSelector = (state: RootState) => state.browse.activePage;

export default activePageSelector;