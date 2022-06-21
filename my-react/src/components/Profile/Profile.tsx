import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.tsx";
import ProfileInfo from "../ProfileInfo/ProfileInfo.tsx";
import {updateNewPostText} from "../../redux/state.tsx";
const Profile = (props) => {

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
