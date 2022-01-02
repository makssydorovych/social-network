import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.js";
const Profile = () => {
	return (
		<main className={s.content}>
			<div>
				<img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'></img>
			</div>

			<MyPosts />
		</main>
	);
};
export default Profile;
