import { ComponentType, FC } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppRootStateType } from "../redux/redux-store";

const mapStateToPropsForRedirect = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
});

export function withAuthRedirect<T extends JSX.IntrinsicAttributes>(Component: ComponentType<T>) {

    const RedirectComponent: FC<mapStateToPropsType> = (props) => {
        let { isAuth, ...restProps } = props;
        if (!props.isAuth) {
            return <Navigate to="/login" />;
        }
        return <Component {...restProps as T} />;
    };

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}

//types
type mapStateToPropsType = ReturnType<typeof mapStateToPropsForRedirect>;
