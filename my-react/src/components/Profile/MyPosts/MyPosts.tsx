import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import React from 'react';
import {PostType} from "../../../redux/state";

type PropsType = {

    updateNewPostText: (newText: string) => void
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
}

const MyPosts = (props: PropsType) => {
    let postsElements =
        props.posts.map(p => <Posts key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.addPost()

    };
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;

            props.updateNewPostText(text);

        }
    }
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}/>
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
