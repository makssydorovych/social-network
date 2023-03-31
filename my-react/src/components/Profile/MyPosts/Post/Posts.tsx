import React from "react";
import s from "./MyPost.module.css";

type PropsTypes = {
    message: string,
    key: string
    likes: number
}
export const Post = (props: PropsTypes) => {

    return (
        <div className={s.item} key ={props.key}>
            <img src="" alt=""/>
            {props.message}
            <div>
                <span>likes {props.likes}</span>
            </div>
        </div>
    );
};
