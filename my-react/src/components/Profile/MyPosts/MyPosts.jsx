import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
const MyPosts = () => {
	let posts = [
		{ id: 1, message: "Hello", likesCount:12},
		{ id: 2, message: "hello World",likesCount:6},
		{ id: 3, message: "hellodxxsxs",likesCount:14},
		{ id: 4, message: "lorem ispum dolor",likesCount:1},
		
	];
	let postsElemetns = 
	posts.map ( p => <Posts message={p.message} likesCount={p.likesCount}/>);
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
