import type { RootState } from "../";


const userNameSelector = (state: RootState) => state.auth.userName;

export default userNameSelector;