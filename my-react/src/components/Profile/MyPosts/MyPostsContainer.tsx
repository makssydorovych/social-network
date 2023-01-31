import React from 'react';
import {changeNewPostText, addPost} from "../../../redux/ProfileReducer";
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
    addPost: () => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToprops = (state: AppRootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewPostText: (newText: string) => {dispatch(changeNewPostText(newText))},
        addPost: () => {dispatch(addPost())
            dispatch(changeNewPostText(""))}
    }
}

const MyPostsContainer = connect(mapStateToprops, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
