import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
const MyPosts = (props) => {

	let postsElemetns = 
	props.posts.map ( p => <Posts message={p.message} likesCount={p.likesCount}/>);
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
		{postsElemetns}
			</div>
		</div>
	);
};
export default MyPosts;
