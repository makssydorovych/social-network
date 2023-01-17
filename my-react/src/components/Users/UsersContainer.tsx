import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux"
import Users from "./Users";
import {ReduxStoreType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersInitialStateType} from "../../redux/UsersReducer";

type mapStateToPropsType ={
    userPage: UsersInitialStateType
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToprops = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        users: state.getState().usersPage.users,

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
