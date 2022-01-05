import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.js";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
const Profile = () => {
	return (
		<main className={s.content}>
			<ProfileInfo />

			<MyPosts />
		</main>
	);
};
export default Profile;
