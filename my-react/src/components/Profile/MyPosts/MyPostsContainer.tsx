
import React from 'react';
import {ActionsTypes, PostType} from "../../../redux/store";
import {changeNewPostTextAC, addPostAC} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";


type PropsType = {
    store: ReduxStoreType
}

const MyPostsContainer = (props: PropsType) => {
let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostAC())
        props.store.dispatch(changeNewPostTextAC(""))

    };
    let onPostChange = (newText: string) => {

        props.store.dispatch(changeNewPostTextAC(newText))
    }

    return (
        <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange} addPost={addPost}/>
    );
};
export default MyPostsContainer;
