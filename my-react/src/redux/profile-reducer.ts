import {PhotosType, PostType, ProfileType} from "./types";
import {InferActionsType, ThunkApp} from "./redux-store";
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
export const actions = {
    addPost: (newPostText: string) => ({type: 'PROFILE/ADD-POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'PROFILE/SET-USER-PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'PROFILE/SET-STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'PROFILE/DELETE-POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'PROFILE/SAVE-PHOTO-SUCCESS', photos} as const),
    changeNewPostText: (text: string) => ({type: 'PROFILE/UPDATE-NEW-POST-TEXT', newText: text} as const)
}

export type ActionsTypes = InferActionsType<typeof actions>;
//THUNKS
export const getUserProfile = (userId: number | null): ThunkApp => async dispatch => {
    const data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data))
}
export const getStatus = (userId: number): ThunkApp => async dispatch => {
    const data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}
export const updateStatus = (status: string): ThunkApp => async dispatch => {
    try {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(updateStatus(status))
        }
    } catch (error) {

    }
}
export const savePhoto = (file: File): ThunkApp => async dispatch => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType): ThunkApp => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId))
        } else throw new Error("User ID can't be null")
    } else {
        dispatch(stopSubmit("edit-profile", {error: response.messages[0]}))
        return Promise.reject(response.messages[0])
    }
}