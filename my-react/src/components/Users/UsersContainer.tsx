import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setUsers, setUsersTotalCount, toggleIsFetching, followingProgress,
    unfollow,
    UsersInitialStateType, getUsersTC
} from "../../redux/UsersReducer";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {usersAPI} from "../../api/API";


class UsersContainer extends React.Component<{ any }, { any }> {
    constructor(props: { any }) {
        super(props);
    }

    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            });
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount},
                pageSize={this.props.pageSize},
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged},
                users={this.props.users},
                follow={this.props.follow},
                unfollow={this.props.unfollow},
                followingProgress={this.props.followingProgress}

                />
            </>
        )
    }
}

type mapStateToPropsType = {
    users: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: any
    isFetching: boolean
    followingInProgress: boolean
}
type mapDispatchToPropsType = {
    follow: boolean,
    unfollow: boolean,
    setUsers: (userId: number) => void,
    setCurrentPage: (users: any) => void,
    setUsersTotalCount: (totalCount: any) => void,
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToprops = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress


    }
}

export default connect(mapStateToprops, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        toggleIsFetching,
        followingProgress,
       getUsers: getUsersTC
    }
)(UsersContainer);


