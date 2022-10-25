import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostType, changeNewPostTextAC, addPostAC} from "../../../redux/store";


type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: PropsType) => {
    let postsElements =
        props.posts.map(p => <Posts key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>);
    let newPostElement = props.newPostText;

    let addPost = () => {
        props.dispatch(addPostAC())
        props.dispatch(changeNewPostTextAC(""))

    };
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value;
        props.dispatch(changeNewPostTextAC(newText))
    }
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}

                        value={newPostElement}/>
                </div>
                <div>
                    <button type={"submit"} onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};
export default MyPosts;
