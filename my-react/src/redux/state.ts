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
    updateNewPostText: (newText: string) => void
    rerenderEntireTree: (state : RootStateType) => void
    addPost: (newPost: PostType) => void
    subscribe: (observer: () => void) => void
    getState: () => void
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


    },
    getState(){
        return this._state
    },
    rerenderEntireTree() {
        console.log("state")
    },
    addPost() {
        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this.rerenderEntireTree(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree(this._state);
    },
    subscribe(observer: () => void) {
        this.rerenderEntireTree = observer;
    }

}
export default store;
// window.store = store;