import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux"
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC,
    unfollowAC,
    UsersInitialStateType,
    UserType
} from "../../redux/UsersReducer";
import UsersC from "./UsersC";

type mapStateToPropsType ={
    usersPage: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: 1
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: any) => void
    setTotalUsersCount: (totalCount: any) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToprops = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,

    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
        setTotalUsersCount: (totalCount) => {dispatch(setUsersTotalCountAC(totalCount))}

    }
}

const UserssContainer = connect(mapStateToprops, mapDispatchToProps)(UsersC);

export default UserssContainer;
