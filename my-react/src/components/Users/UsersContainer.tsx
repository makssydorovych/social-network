import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux"
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersInitialStateType, UserType} from "../../redux/UsersReducer";

type mapStateToPropsType ={
    usersPage: UsersInitialStateType
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToprops = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage

    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))}

    }
}

const UserssContainer = connect(mapStateToprops, mapDispatchToProps)(Users);

export default UserssContainer;
