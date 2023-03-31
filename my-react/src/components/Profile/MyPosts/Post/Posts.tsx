import s from "./Posts.module.css";
import React from "react";


type PropsType = {
    message: string
    likes: number
}

const Posts = (props: PropsType) => {
    return (

        <div className={s.item}>
            <div>
                <img src='http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png' alt={""}></img>
                {props.message}
            </div>
            <span>Like</span>{props.likes}
        </div>

    );
};
export default Posts;
