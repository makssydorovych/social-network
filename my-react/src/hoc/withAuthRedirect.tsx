import React, {Component, ComponentType} from 'react';
import { Navigate } from "react-router-dom"
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStatesPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStatesPropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T extends JSX.IntrinsicAttributes>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatesPropsType) => {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) return <Navigate to={'/login'}/>

        return <Component {...restProps as T }/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent


}

