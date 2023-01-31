import {PhotosType, PostType, ProfileType} from "./types";
import {ThunkApp} from "./redux-store";
import {profileAPI} from "../api/ProfileAPI";
import {stopSubmit} from "redux-form";

const SET_STATUS = 'SET-STATUS'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const DELETE_POST = 'DELETE-POST'
const SAVE_PHOTO_SUCESS = 'SAVE-PHOTO-SUCESS'


const initialState = {
    posts: [
        {id: 1, message: "Hello", likesCount: 12},
        {id: 2, message: "hello World", likesCount: 6},
        {id: 3, message: "hellodxxsasasaxs", likesCount: 14},
        {id: 4, message: "lorem ispum dolor", likesCount: 1},

    ] as Array<PostType>,
    newPostText: "",
    profile: null as ProfileType | null,
    status: ""
};
export type ProfileInitialStateType = typeof initialState
export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionsTypes): ProfileInitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state, posts: [...state.posts, newPost],
                newPostText: ''
            }
        case SET_STATUS :
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        case 'UPDATE-NEW-POST-TEXT' :
            let copyState = {...state}
            copyState.newPostText = action.newText;
            return copyState
        case SAVE_PHOTO_SUCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        default:
            return state

    }
}
export const addPost = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCESS, photos} as const)

export type AddPostActionType = ReturnType<typeof addPost>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetStatusAT = ReturnType<typeof setStatus>
export type DeletePostAT = ReturnType<typeof deletePost>
export type SavePhotoSuccessAT = ReturnType<typeof savePhotoSuccess>

export type ActionsTypes =
    AddPostActionType
    | SetUserProfileActionType
    | SetStatusAT
    | DeletePostAT
    | ChangeNewTextActionType
    | SavePhotoSuccessAT;

export const changeNewPostText = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}
export type ChangeNewTextActionType = ReturnType<typeof changeNewPostText>

export const getUserProfile = (userId: number): ThunkApp => async dispatch => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}
export const getStatus = (userId: number): ThunkApp => async (dispatch: any) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}
export const updateStatus = (status: string): ThunkApp => async dispatch => {
    try {
        const data = await profileAPI.updateStatus(status)
        if(data.resultCode ===0) {
            dispatch(updateStatus(status))
        }
    } catch (error) {

    }
}
export const savePhoto = (file: any): ThunkApp => async dispatch => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}


export const saveProfile = (profile: ProfileType): ThunkApp => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {error: response.messages[0]}))
        return Promise.reject(response.messages[0])
    }
}