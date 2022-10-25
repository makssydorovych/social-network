import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";


type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}
const Profile = (props: PropsType) => {

    return (
        <main className={s.content}>
            <ProfileInfo/>

            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     // updateNewPostText={props.updateNewPostText}
                     // addPost={props.addPost}/>
                     dispatch={props.dispatch} />
        </main>
    );
};
export default Profile;
