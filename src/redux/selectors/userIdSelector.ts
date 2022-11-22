import type { RootState } from "../";


const userIdSelector = (state: RootState) => state.auth.userId;

export default userIdSelector;