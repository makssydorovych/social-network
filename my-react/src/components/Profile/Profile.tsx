import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";



type PropsType = {
	profilePage: ProfilePageType
	addPost: (postMessage: string) => void
	updateNewPostText: (newText: string) => void
}
const Profile = (props: PropsType) => {

	return (
		<main className={s.content}>
			<ProfileInfo />

			<MyPosts posts={props.profilePage.posts}
					 newPostText={props.profilePage.newPostText}
					 updateNewPostText={props.updateNewPostText}
					 addPost={props.addPost}/>
		</main>
	);
};
export default Profile;
