import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {actions} from "../../../redux/profile-reducer"
import {AppRootStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.posts,
    };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;

export const MyPostsContainer = connect(
    mapStateToProps,
    {addPost: actions.addPost}
)(MyPosts);