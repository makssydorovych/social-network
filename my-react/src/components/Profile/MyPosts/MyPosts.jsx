import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import React from 'react';
const MyPosts = (props) => {

	let postsElemetns = 
	props.posts.map ( p => <Posts message={p.message} likesCount={p.likesCount}/>);
	let newPostElement = React.createRef();
	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	};
	return (
		<div className={s.postBlock}>
			<h3>My post</h3>
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
				</div>
				<div>
					<button onClick={ addPost }>Add Post</button>
				</div>
			</div>
			<div className={s.posts}>
		{postsElemetns}
			</div>
		</div>
	);
};
export default MyPosts;
