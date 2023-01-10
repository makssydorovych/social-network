import {ActionsTypes, PostType} from "./store";

const initialState = {
    posts: [
        {id: 1, name: "Hello", likesCount: 12},
        {id: 2, name: "hello World", likesCount: 6},
        {id: 3, name: "hellodxxsasasaxs", likesCount: 14},
        {id: 4, name: "lorem ispum dolor", likesCount: 1},

    ],
    newPostText: "Post Text..."
};

export const profileReducer = (state= initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 5,
                name: state.newPostText,
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