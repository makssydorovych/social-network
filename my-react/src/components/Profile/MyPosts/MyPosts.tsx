import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostType} from "../../../redux/store";
import {MyPostsPropsType} from "./MyPostsContainer";



// type PropsType = {
//     posts: Array<PostType>
//     newPostText?: string
//     updateNewPostText: (newText: string) => void
//     addPost: () => void
//
// }

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements =
        props.posts.map(p => <Posts key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let onAddPost = () => {
        props.addPost();


    };
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value;
        props.updateNewPostText(newText);
    }
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        placeholder={"Add your post..."}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button type={"submit"} onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};
export default MyPosts;
