const SET_STATUS = 'SET-STATUS'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const DELETE_POST = 'DELETE-POST'
const SAVE_PHOTO_SUCESS = 'SAVE-PHOTO-SUCESS'


export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ContactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string | null
    large: string | null
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType
    photos: PhotosType
}
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
export const addPostAC = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const)

export const setUserProfileAC = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePostAC = (postId: number) => ({type: DELETE_POST, postId} as const)
export const savePhotoSuccessAC = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCESS, photos} as const)


export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>
export type SetStatusAT = ReturnType<typeof setStatusAC>
export type DeletePostAT = ReturnType<typeof deletePostAC>
export type SavePhotoSuccessAT = ReturnType<typeof savePhotoSuccessAC>

export type ActionsTypes =
    AddPostActionType
    | SetUserProfileActionType
    | SetStatusAT
    | DeletePostAT
    | ChangeNewTextActionType
    | SavePhotoSuccessAT;


export const changeNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}
export type ChangeNewTextActionType = ReturnType<typeof changeNewPostTextAC>