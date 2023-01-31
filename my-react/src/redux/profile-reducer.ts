import {PhotosType, PostType, ProfileType} from "./types";
import {ThunkApp} from "./redux-store";
import {profileAPI} from "../api/ProfileAPI";
import {stopSubmit} from "redux-form";

const initialState = {
    posts: [
        {id: 1, message: "Hello", likesCount: 12},
        {id: 2, message: "hello World", likesCount: 6},
        {id: 3, message: "hello ", likesCount: 14},
        {id: 4, message: "lorem  dolor", likesCount: 1},

    ] as Array<PostType>,
    newPostText: "",
    profile: null as ProfileType | null,
    status: ""
};
export type ProfileInitialStateType = typeof initialState
export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionsTypes): ProfileInitialStateType => {
    switch (action.type) {
        case 'PROFILE/ADD-POST':
            const newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state, posts: [...state.posts, newPost],
                newPostText: ''
            }
        case 'PROFILE/SET-STATUS' :
            return {
                ...state,
                status: action.status
            }
        case 'PROFILE/SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'PROFILE/DELETE-POST':
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        case 'PROFILE/UPDATE-NEW-POST-TEXT' :
            let copyState = {...state}
            copyState.newPostText = action.newText;
            return copyState
        case 'PROFILE/SAVE-PHOTO-SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state

    }
}
export const addPost = (newPostText: string) => ({type: 'PROFILE/ADD-POST', newPostText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'PROFILE/SET-USER-PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'PROFILE/SET-STATUS', status} as const)
export const deletePost = (postId: number) => ({type: 'PROFILE/DELETE-POST', postId} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: 'PROFILE/SAVE-PHOTO-SUCCESS', photos} as const)
export const changeNewPostText = (text: string) =>  ({type: 'PROFILE/UPDATE-NEW-POST-TEXT', newText: text} as const)

export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof changeNewPostText>



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