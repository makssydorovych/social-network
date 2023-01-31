import React, {Component, ComponentType} from 'react';
import { Redirect, redirect} from "react-router-dom";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStatesPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStatesPropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect(Component: React.ComponentType) {
    const RedirectComponent = (props: MapStatesPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps }/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent


}

