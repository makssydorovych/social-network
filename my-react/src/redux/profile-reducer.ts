import {v1} from "uuid";
import {stopSubmit} from "redux-form";
import {AppThunkType} from "./redux-store";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {profileAPI} from "../api/ProfileAPI";

export const ADD_POST = "ADD-POST";
export const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const SET_PHOTO = "SET-PHOTO";
const DELETE_POST = "DELETE-POST";

let initialState: InitialStateType = {
    posts: [
        {id: v1(), message: "Hi, how are you", likes: 10},
        {id: v1(), message: "Hi, Hi,you", likes: 10},
        {id: v1(), message: "Hi, me", likes: 10},
    ],
    profile: null,
    status: "",
};

export const profileReducer = (
    state: InitialStateType = initialState,
    action: ProfileActionsType
): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v1(),
                message: action.newPostText,
                likes: 0,
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {...state, status: action.status};
        case SET_PHOTO:
            if (state.profile)
                return {
                    ...state,
                    profile: {...state.profile, photos: action.photos},
                };
            return state;
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.postId),
            };
        default:
            return state;
    }
};

export const addPost = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText,
    } as const;
};
export const setProfile = (profile: ProfileType) =>
    ({type: SET_USER_PROFILE, profile} as const);
export const setStatus = (status: string) =>
    ({type: SET_STATUS, status} as const);
export const setPhoto = (photos: PhotosType) =>
    ({type: SET_PHOTO, photos} as const);
export const deletePost = (postId: string) =>
    ({
        type: DELETE_POST,
        postId,
    } as const);

export const getUserProfile =
    (userId: number): AppThunkType =>
        (dispatch) => {
            profileAPI.getProfile(userId).then((response) => {
                dispatch(setProfile(response.data));
            });
        };

export const getStatus =
    (userId: number): AppThunkType =>
        (dispatch) => {
            profileAPI.getStatus(userId).then((response) => {
                dispatch(setStatus(response.data));
            });
        };
export const updateStatus =
    (status: string): AppThunkType =>
        async (dispatch) => {
            try {
                let response = await profileAPI.updateStatus(status);
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            } catch (e) {
                console.error(e);
            }
        };

export const savePhoto =
    (photo: PhotosType): AppThunkType =>
        (dispatch) => {
            profileAPI.savePhoto(photo).then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setPhoto(response.data.data.photos));
                }
            });
        };

export const saveProfile =
    (profile: Omit<ProfileType, 'userId' | 'photos'>): AppThunkType =>
        async (dispatch, getState) => {
            const userId = getState().auth.userId;
            const oldProfile = getState().profilePage.profile;
            console.log(profile);
            const newProfile = {...oldProfile, ...profile};
            const response = await profileAPI.saveProfile(newProfile);
            if (response.data.resultCode === 0) {
                dispatch(getUserProfile(userId as number));
            } else {
                dispatch(
                    stopSubmit("edit-profile", {_error: response.data.messages[0]})
                );
                return Promise.reject(response.data.messages[0]);
            }
        };

//types
type InitialStateType = {
    posts: PostType[];
    profile: ProfileType | null;
    status: string;
};
export type ProfileActionsType =
    | ReturnType<typeof setProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setPhoto>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof addPost>;
