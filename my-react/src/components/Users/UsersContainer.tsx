import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux"
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setUsers, setUsersTotalCount, toggleIsFetching,
    unfollow,
    UsersInitialStateType,
    UserType
} from "../../redux/UsersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";

class UsersContainer extends React.Component<UsersPropsType, AppStateType> {
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(responce.data.items)
            this.props.setTotalUsersCount(responce.data.totalCount)
        });
    }

    onPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(responce.data.items)
        });
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}

                />
            </>
        )
    }
}

type mapStateToPropsType = {
    users: UserType
    pageSize: number
    totalUsersCount: number
    currentPage: any
    isFetching: boolean
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToprops = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,


    }
}

export default connect(mapStateToprops, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
    }
)(UsersContainer);


