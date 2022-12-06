import {PostType} from "./store";

export const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state
        case 'UPDATE-NEW-POST-TEXT' :
            state.newPostText = action.newText;
            return state
        default: return state

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