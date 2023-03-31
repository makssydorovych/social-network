
import { AppThunkType } from "./redux-store";
import {usersAPI} from "../api/UsersAPI";
import {UserType} from "../types/types";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET-USERS";
export const SET_CURRENT_PAGE = "SET-CURRENT_PAGE";
export const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
export const SET_FETCHING = "SET-FETCHING";
export const SET_PROGRESS_FETCHING = "SET-PROGRESS-FETCHING";
let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    inFollowingProgress: [],
};

export const usersReducer = (
    state: InitialStateType = initialState,
    action: UsersActionsType
) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id === action.userId ? { ...u, followed: true } : u
                ),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id === action.userId ? { ...u, followed: false } : u
                ),
            };
        case SET_USERS:
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount };
        case SET_FETCHING:
            return { ...state, isFetching: action.fetching };
        case SET_PROGRESS_FETCHING:
            return {
                ...state,
                inFollowingProgress: action.inFollowingProgress
                    ? [...state.inFollowingProgress, action.userId]
                    : state.inFollowingProgress.filter((id) => id !== action.userId),
            };
        default:
            return state;
    }
};

export const followSuccess = (userId: number) =>
    ({
        type: FOLLOW,
        userId,
    } as const);
export const unfollowSuccess = (userId: number) =>
    ({
        type: UNFOLLOW,
        userId,
    } as const);
export const setUsers = (users: UserType[]) =>
    ({ type: SET_USERS, users } as const);
export const setTotalCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalUsersCount,
    } as const;
};
export const setCurrentPage = (currentPage: number) =>
    ({
        type: SET_CURRENT_PAGE,
        currentPage,
    } as const);
export const setFetching = (fetching: boolean) =>
    ({
        type: SET_FETCHING,
        fetching,
    } as const);
export const setFollowingFetching = (
    inFollowingProgress: boolean,
    userId: number
) =>
    ({
        type: SET_PROGRESS_FETCHING,
        inFollowingProgress,
        userId,
    } as const);

export const requestUsers =
    (currentPage: number, pageSize: number): AppThunkType =>
        (dispatch) => {
            dispatch(setCurrentPage(currentPage));
            dispatch(setFetching(true));
            usersAPI.getUsers(currentPage, pageSize).then((data) => {
                dispatch(setUsers(data.items));
                dispatch(setTotalCount(data.totalCount));
                dispatch(setFetching(false));
            });
        };
export const follow =
    (userId: number): AppThunkType =>
        (dispatch) => {
            dispatch(setFollowingFetching(true, userId));
            usersAPI
                .follow(userId)
                .then((response) => {
                    if (response.data.resultCode === 0) {
                        dispatch(followSuccess(userId));
                    }
                })
                .finally(() => {
                    dispatch(setFollowingFetching(false, userId));
                });
        };
export const unfollow =
    (userId: number): AppThunkType =>
        (dispatch) => {
            dispatch(setFollowingFetching(true, userId));
            usersAPI
                .unfollow(userId)
                .then((response) => {
                    if (response.data.resultCode === 0) {
                        dispatch(unfollowSuccess(userId));
                    }
                })
                .finally(() => {
                    dispatch(setFollowingFetching(false, userId));
                });
        };

type InitialStateType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    inFollowingProgress: number[];
};

//types

type followSuccessType = ReturnType<typeof followSuccess>;
type unfollowSuccessType = ReturnType<typeof unfollowSuccess>;
type setUsersType = ReturnType<typeof setUsers>;
type setTotalCountType = ReturnType<typeof setTotalCount>;
type setCurrentPageType = ReturnType<typeof setCurrentPage>;
type setFetchingType = ReturnType<typeof setFetching>;
type setFollowingFetchingType = ReturnType<typeof setFollowingFetching>;
export type UsersActionsType =
    | followSuccessType
    | setFetchingType
    | setFollowingFetchingType
    | setCurrentPageType
    | setTotalCountType
    | setUsersType
    | unfollowSuccessType
    | followSuccessType;
