import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/redux-store";


const Profile = () => {

    return (
        <main className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}
                // posts={props.profilePage.posts}

            />
        </main>
    );
};
export default Profile;
