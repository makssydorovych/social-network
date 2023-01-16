import React from 'react';
import {changeNewPostTextAC, addPostAC} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {AppRootStateType, ReduxStoreType} from "../../../redux/redux-store";
import {useDispatch, useSelector} from "react-redux";
import StoreContext from "../../../StoreContext";




const MyPostsContainer = () => {
    const newText = useSelector<AppRootStateType>(state => (state.profilePage.newPostText))
    const dispatch = useDispatch()
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()




                    let addPost = () => {
                        dispatch(addPostAC())
                        dispatch(changeNewPostTextAC(""))

                    };
                    let onPostChange = (newText: string) => {
                        dispatch(changeNewPostTextAC(newText))
                    }
                    return <MyPosts posts={state.profilePage.posts} newPostText={newText as string}
                      updateNewPostText={onPostChange} addPost={addPost}/>}
            }
        </StoreContext.Consumer>
    );
};
export default MyPostsContainer;
