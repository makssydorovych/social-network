import React from 'react';
import {changeNewPostTextAC, addPostAC, ProfileInitialStateType, PostType} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import { AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux"

type mapStateToPropsType ={
    posts: Array<PostType>
    newPostText: string
}
type mapDispatchToPropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToprops = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewPostText: (newText: string) => {dispatch(changeNewPostTextAC(newText))},
        addPost: () => {dispatch(addPostAC())
            dispatch(changeNewPostTextAC(""))}
    }
}

const MyPostsContainer = connect(mapStateToprops, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
