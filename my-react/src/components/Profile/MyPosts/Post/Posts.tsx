import s from "./Posts.module.css";
import React from "react";
type PropsType = {
	message: string
	id: number
	likesCount: number
}
const Posts = (props: PropsType) => {
	return (
		<div key={props.id}>
			<div className={s.item}>
				<div>
					<img src='http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png' alt={""}></img>
				</div>
				{props.message}
			</div>
		</div>
	);
};
export default Posts;
