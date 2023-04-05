import s from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileType } from "../../types/types";
import { FC } from "react";
type ProfileComponentType ={
    isOwner: boolean
    status: string
    profile: ProfileType | null
    updateStatus: (value: string)=> void
    savePhoto: (value: File)=> void
    saveProfile: (value:  Omit<ProfileType, 'userId'| 'photos'> )=> Promise<any>
}
export const Profile: FC<ProfileComponentType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
            <MyPostsContainer  />
        </div>
    );
};
