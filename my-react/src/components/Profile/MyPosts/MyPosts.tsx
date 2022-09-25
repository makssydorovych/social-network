import s from "./MyPosts.module.css";
import Posts from "./Post/Posts.tsx";
import React from 'react';

const MyPosts = (props) => {
	let postsElemetns = 
	props.posts.map ( p => <Posts message={p.message} likesCount={p.likesCount}/>);
	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		props.updateNewPostText("");
	};
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
		props.updateNewPostText("");
	}
	return (
		<div className={s.postBlock}>
			<h3>My post</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
				</div>
				<div>
					<button type={"submit"} onClick={ addPost }>Add Post</button>
				</div>
			</div>
			<div className={s.posts}>
		{postsElemetns}
			</div>
		</div>
	);
};
export default MyPosts;
