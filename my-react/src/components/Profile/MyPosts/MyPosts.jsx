import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
const MyPosts = () => {
	let postsData = [
		{ id: 1, message: "Hello", likesCount:12},
		{ id: 2, message: "hello World",likesCount:6},
		{ id: 3, message: "hellodxxsxs",likesCount:14},
		{ id: 4, message: "lorem ispum dolor",likesCount:1},
		
	];
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
				<Posts message={postsData[0].message} id={postsData[0].id} likesCount={postsData[0].likesCount}/>
				<Posts message={postsData[1].message} id={postsData[1].id} likesCount={postsData[1].likesCount}/>
				<Posts message={postsData[2].message} id={postsData[2].id} likesCount={postsData[2].likesCount}/>
				<Posts message={postsData[3].message} id={postsData[3].id} likesCount={postsData[3].likesCount}/>
			</div>
		</div>
	);
};
export default MyPosts;
