import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/redux-store";


type PropsType = {
    // profilePage: ProfilePageType
    // dispatch: (action: ActionsTypes) => void
    store: ReduxStoreType
}
const Profile = (props: PropsType) => {

    return (
        <main className={s.content}>
            <ProfileInfo/>

            <MyPostsContainer  store={props.store}
                // posts={props.profilePage.posts}
                //      newPostText={props.profilePage.newPostText}
                //      // updateNewPostText={props.updateNewPostText}
                //      // addPost={props.addPost}/>
                //      dispatch={props.dispatch} />
            />
        </main>
    );
};
export default Profile;
