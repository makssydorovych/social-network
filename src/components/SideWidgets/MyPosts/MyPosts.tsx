import React, { ChangeEvent } from 'react';
import classes from './MyPosts.module.css';
import { Post } from './Post/Post';
import { ProfilePageType } from '../../../redux/profile-reducer';
import { TextAreaFormik } from '../../00-Common/InputFormik/InputFormik';
import { Button } from '../../00-Common/Button/Button';

type MyPostType = {
  newPostTextOnChange: (newPostText: string) => void;
  addPostOnClick: () => void;
  profilePage: ProfilePageType;
};

export class MyPosts extends React.PureComponent<MyPostType> {
  render() {
    let postsElements = this.props.profilePage.posts.map((el, index) => (
      <Post key={index} id={el.id} message={el.message} likesCount={el.likesCount} />
    ));
    const postOnClickHandler = () => {
      this.props.addPostOnClick();
    };
    const postOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      this.props.newPostTextOnChange(e.currentTarget.value);
    };

    return (
      <div className={classes.postsBlock}>
        <h3>It`s demo component only!</h3>
        <div>
          <div>
            <TextAreaFormik onChange={postOnChangeHandler} value={this.props.profilePage.newTextState}>
              Add post
            </TextAreaFormik>
          </div>
          <div>
            <Button onClick={postOnClickHandler}>Add post</Button>
            <audio controls onVolumeChangeCapture={e => e.currentTarget.volume === 0.2}>
              <source src="http://sc.schwarze-welle.de:7500/;&type=mp3" type="audio/mp3" />
            </audio>
          </div>

          <div className={classes.item}>
            <h3>New Post</h3>
          </div>
          <div className={classes.item}>{postsElements}</div>
        </div>
      </div>
    );
  }
}

// PureComponent as shouldComponentUpdate
// but for functional component use HOC React.memo() -> wrap in this hoc your component

// shouldComponentUpdate(nextProps: Readonly<MyPostType>, nextState: Readonly<{}>, nextContext: any): boolean {
//     return  nextProps !== this.props || nextState !== this.state
// }
