import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props: any) => {

    return (
        <main className={s.content}>
            <ProfileInfo props={props.profile}/>
            <MyPostsContainer


            />
        </main>
    );
};
export default Profile;
