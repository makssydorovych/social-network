import React from "react";
import { connect } from "react-redux";
import {
    requestUsers,
    follow,
    unfollow,
    setCurrentPage,
} from "../../redux/users-reducer";
import { Users } from "./Users";
import { compose } from "redux";
import {
    getUsers,
    getIsFetching,
    getInFollowingProgress,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
} from "../../redux/selectors/userSelectors";

import { AppRootStateType } from "../../redux/redux-store";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component<mapStateToPropsType & mapDispatchToPropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const { requestUsers, pageSize } = this.props;
        requestUsers(pageNumber, pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader />
                ) : (
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        onPageChanged={this.onPageChanged}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        inFollowingProgress={this.props.inFollowingProgress}
                    />
                )}
            </>
        );
    }
}

const mptp = (state: AppRootStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        inFollowingProgress: getInFollowingProgress(state),
    };
};

type mapStateToPropsType = ReturnType<typeof mptp>;
type mapDispatchToPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setCurrentPage: (currentPage: number) => void;
    requestUsers: (currentPage: number, pageSize: number) => void;
};

export default compose(
    connect(mptp, { follow, unfollow, setCurrentPage, requestUsers })
)(UsersContainer);
