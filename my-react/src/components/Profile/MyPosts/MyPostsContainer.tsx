import React from 'react';
import { actions } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import { AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux"
import {PostType} from "../../../redux/types";

type mapStateToPropsType ={
    posts: Array<PostType>
    newPostText: string
}
type mapDispatchToPropsType = {
    updateNewPostText: (newText: string) => void
    addPost: (newPostText: string) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewPostText: (newText: string) => {dispatch(actions.changeNewPostText(newText))},
        addPost: (newPostText) => {dispatch(actions.addPost(newPostText))
            dispatch(actions.changeNewPostText(""))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
