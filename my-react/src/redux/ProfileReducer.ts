

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType | SetUserProfileActionType;
export type PostType = {
    id: number
    message: string
    likesCount: number
}
const initialState = {
    posts: [
        {id: 1, message: "Hello", likesCount: 12},
        {id: 2, message: "hello World", likesCount: 6},
        {id: 3, message: "hellodxxsasasaxs", likesCount: 14},
        {id: 4, message: "lorem ispum dolor", likesCount: 1},

    ] as Array<PostType>,
    newPostText: "",
    profile: null
};
export type ProfileInitialStateType = typeof initialState
export const profileReducer = (state:ProfileInitialStateType = initialState, action: ActionsTypes):ProfileInitialStateType => {
    let copyState = {
        ...state
    }
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            copyState.posts.push(newPost);
            copyState.newPostText = "";
            return copyState

        case 'UPDATE-NEW-POST-TEXT' :

            copyState.newPostText = action.newText;
            return copyState
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        default:
            return state

    }
}
export const addPostAC = () => ({type: 'ADD-POST' as const})
export const changeNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}
export const setUserProfile = (profile:any) => ({type: 'SET-USER-PROFILE', profile}) as const

export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewTextActionType = ReturnType<typeof changeNewPostTextAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>