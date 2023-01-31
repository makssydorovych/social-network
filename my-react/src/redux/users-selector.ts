import {AppRootStateType} from "./redux-store";
import {createSelector} from "@reduxjs/toolkit";

const getUserSelector = (state: AppRootStateType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUserSelector,
    (users)=>{
    return users.filter(u=> true)
    })
export const getPageSize = (state: AppRootStateType)=>{
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppRootStateType)=>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppRootStateType)=>{
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppRootStateType)=>{
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppRootStateType)=>{
    return state.usersPage.followingInProgress
}

