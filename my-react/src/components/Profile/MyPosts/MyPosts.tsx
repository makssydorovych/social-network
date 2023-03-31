import Posts from "./Post/Posts";
import React from 'react';
import AddPostForm from "./AddPostForm/AddPostForm";
import {PostType} from "../../../types/types";

type PropsType ={
    posts: PostType[]
    addPost: (newPostText: string)=> void
}
const NewPost = (props: { addPost: (value: string) => void }) => {
    const addNewPost = (values: { newPostText: string }) => {
        props.addPost(values.newPostText);
        values.newPostText = "";
    };

    return (
        <div>
            <AddPostForm onSubmit={addNewPost} />
        </div>
    );
};

export const MyPosts = React.memo((props: PropsType) => {
    return (
        <>
            <div>
                <NewPost addPost={props.addPost} />
            </div>
            <div>
                {[...props.posts].reverse().map((post) => (
                    <Posts
                        message={post.message}
                        key={`post${post.id}`}
                        likes={post.likes}
                    />
                ))}
            </div>
        </>
    );
});