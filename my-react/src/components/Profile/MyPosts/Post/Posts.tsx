import s from "./Posts.module.css";
import React from "react";
const Posts = props => {
	return (
		<div>
			<div className={s.item}>
				<div>
					<img src='http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'></img>
				</div>
				{props.message}
			</div>
		</div>
	);
};
export default Posts;
