import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts :[
            { id: 1, message: "Hello", likesCount:12},
            { id: 2, message: "hello World",likesCount:6},
            { id: 3, message: "hellodxxsxs",likesCount:14},
            { id: 4, message: "lorem ispum dolor",likesCount:1},

        ],
        newPostText: "Post Text"
    },
    messagesPage: {
        messages : [
            { id: 1, message: "Hello WORLD!!!!!" },
            { id: 2, message: "hello World" },
            { id: 3, message: "hellodxxsxs" },
            { id: 4, message: "lorem ispum dolor" },

        ],dialogs : [
            { id: 1, name: "Maksym" },
            { id: 2, name: "Maksym2" },
            { id: 3, name: "Maksym3" },
            { id: 4, name: "elf" },

        ],

    },
    sidebar:{
        friends: [
            { id: 1, name: "maks" },
            { id: 2, name: "maksym" },
            { id: 3, name: "zoia" }
        ]
    }


};
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
state.profilePage.newPostText = newText;
rerenderEntireTree(state);
};
export default state;