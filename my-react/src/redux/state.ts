export type MessageType = {
    id: number
    message: string
}
export  type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type FriendsType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string

}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type sidebarType = {
    friends: Array<FriendsType>

}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: sidebarType
}
export type StoreType = {
    _state: RootStateType
    // updateNewPostText: (newText: string) => void
    _callSubscriber: (callback: () => void) => void
    // addPost: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    _onChange: () => void
    dispatch: (action: ActionsTypes ) => void
}
export type ActionsTypes = AddPostActionType | ChangeNewTextActionType;
type AddPostActionType = ReturnType<typeof addPostAC>
type ChangeNewTextActionType = ReturnType<typeof changeNewPostTextAC>
export const addPostAC = () =>  {
    return {
        type: 'ADD-POST'
    } as const
}
export const changeNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello", likesCount: 12},
                {id: 2, message: "hello World", likesCount: 6},
                {id: 3, message: "hellodxxsasasaxs", likesCount: 14},
                {id: 4, message: "lorem ispum dolor", likesCount: 1},

            ],
            newPostText: "Post Text"
        },
        dialogPage: {
            messages: [
                {id: 1, message: "Hello WORLD!!!!!"},
                {id: 2, message: "hello World"},
                {id: 3, message: "hellodxxsxs"},
                {id: 4, message: "lorem ispum dolor"},

            ], dialogs: [
                {id: 1, name: "Maksym"},
                {id: 2, name: "Maksym2"},
                {id: 3, name: "Maksym3"},
                {id: 4, name: "elf"},

            ],

        },
        sidebar: {
            friends: [
                {id: 1, name: "maks"},
                {id: 2, name: "maksym"},
                {id: 3, name: "zoia"}
            ]
        },


    }, _onChange() {
        return ""
    },

    _callSubscriber(callback: () => void) {
        this._onChange = callback
    },
    getState() {

        return this._state
    },
    subscribe(observer) {
        this._onChange = observer;
    },
    dispatch(action){
        if(action.type === 'ADD-POST'){
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._onChange();
        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._onChange();
        }

    }


}
export default store;

// window.store = store;
// export class addPost {
// }