import type { RootState } from "../";


const userAdminFlagSelector = (state: RootState) => state.auth.isAdmin;

export default userAdminFlagSelector;