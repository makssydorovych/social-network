import {rerenderEntireTree} from "../render";

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
export type FriendsType ={
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
export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello", likesCount: 12},
            {id: 2, message: "hello World", likesCount: 6},
            {id: 3, message: "hellodxxsxs", likesCount: 14},
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
    }


};
export let addPost = (postMessage: string) => {
    const newPost: PostType =  {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};
export default state;