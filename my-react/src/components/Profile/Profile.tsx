import React from "react";
import s from "./Profile.module.css";
import {ProfileType} from "../../redux/types";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type PropsType = {
    isOwner: boolean
    status: string
    profile: ProfileType | null
    updateStatus: (value: string) => void
    savePhoto: (value: File) => void
    saveProfile: (value: Omit<ProfileType, 'userId' | 'photos'>) => Promise<any>
}
const Profile = (props: PropsType) => {

    return (
        <main className={s.content}>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}/>
            <MyPostsContainer
            />
        </main>
    );
};
export default Profile;
