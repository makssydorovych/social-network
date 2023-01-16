import React from 'react';
import {ActionsTypes, PostType} from "../../../redux/store";
import {changeNewPostTextAC, addPostAC} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {AppRootStateType, ReduxStoreType} from "../../../redux/redux-store";
import {useDispatch, useSelector} from "react-redux";


type PropsType = {
    store: ReduxStoreType
}

const MyPostsContainer = (props: PropsType) => {
    const state = props.store.getState()
    const newText = useSelector<AppRootStateType>(state => (state.profilePage.newPostText))

    const dispatch = useDispatch()

    let addPost = () => {
        dispatch(addPostAC())
        dispatch(changeNewPostTextAC(""))

    };
    let onPostChange = (newText: string) => {
        dispatch(changeNewPostTextAC(newText))
    }

    return (
        <MyPosts posts={state.profilePage.posts} newPostText={newText as string}
                 updateNewPostText={onPostChange} addPost={addPost}/>
    );
};
export default MyPostsContainer;
