import { AppRootStateType } from "../redux-store";

export const getUsers = (state: AppRootStateType) => state.usersPage.users;

export const getPageSize = (state: AppRootStateType) => state.usersPage.pageSize;

export const getTotalUsersCount = (state: AppRootStateType) => state.usersPage.totalUsersCount;

export const getCurrentPage = (state: AppRootStateType) => state.usersPage.currentPage;

export const getIsFetching = (state: AppRootStateType) => state.usersPage.isFetching;

export const getInFollowingProgress = (state: AppRootStateType) =>
    state.usersPage.inFollowingProgress;
