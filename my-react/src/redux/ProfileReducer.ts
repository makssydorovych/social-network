import {ActionsTypes} from "./store";
type PostType = {
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
    newPostText: ""
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

export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewTextActionType = ReturnType<typeof changeNewPostTextAC>