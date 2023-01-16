import React from 'react';
import {changeNewPostTextAC, addPostAC, ProfileInitialStateType} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType, ReduxStoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux"

type mapStateToPropsType ={
    dialogPage: ProfileInitialStateType
}
type mapDispatchToPropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToprops = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        posts: state.getState().profilePage.posts,
        newPostText: state.getState().profilePage.newPostText
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
