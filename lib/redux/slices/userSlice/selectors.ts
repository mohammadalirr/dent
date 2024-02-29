import type { ReduxState } from "../../store";
export const selectUser = (state: ReduxState) => state.user.tkn;
export const selectUserData = (state: ReduxState) => state.user.userData;
export const selectStatus = (state: ReduxState) => state.user.isAuth;
