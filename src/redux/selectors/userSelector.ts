import type { RootState } from "../";

const userSelector = (state: RootState) => state.auth.user;

export default userSelector;