import s from "./MyPosts.module.css";
import Posts from "./Post/Posts.js";
const MyPosts = () => {
	return (
		<div className={s.postBlock}>
			<h3>My post</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add Post</button>
				</div>
			</div>
			<div className={s.posts}>
				<Posts message='hello' />
				<Posts message='firstpost' />
				<Posts message='ghiasdw' />
			</div>
		</div>
	);
};
export default MyPosts;
