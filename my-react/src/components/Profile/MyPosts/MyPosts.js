import s from "./MyPosts.module.css";
import Posts from "./Post/Posts.js";
const MyPosts = () => {
	return (
		<div>
			<div>
				my posts
				<div>new post</div>
			</div>
			<div className={s.posts}></div>
			<Posts message='hello' />
			<Posts message='firstpost' />
			<Posts message='ghiasdw' />
		</div>
	);
};
export default MyPosts;
