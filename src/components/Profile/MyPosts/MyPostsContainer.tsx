import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { addPost } from "../../../redux/profile-reducer";
import { AppDispatch, AppRootStateType } from "../../../redux/redux-store";
const mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.posts,
    };
};
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPost(newPostText));
        },
    };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
export type MyPostsType = mapDispatchToPropsType & mapStateToPropsType;
export const MyPostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyPosts);
