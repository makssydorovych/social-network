import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import React from 'react';

type posts = {
    id: number
    message: string
    likesCount: number
}

type PropsType = {
    posts: Array<posts>
    addPost: (postMessage: string) => void
    updateNewPostText: (newText:string | undefined) => void
}

const MyPosts = (props: PropsType) => {
    let postsElements =
        props.posts.map(p => <Posts  message={p.message} likesCount={p.likesCount} id={p.id}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {

        let text = postMessage.current.value;
        props.addPost(text);
        props.updateNewPostText("");
    };
    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text);
        props.updateNewPostText("");
    }
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}  ref={newPostElement} value={props.newText}/>
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
