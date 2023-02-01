import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<PropsType> {
    render() {
        return <Header {...this.props} />;
    }
}
const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    logout: () => {},
});
type mapStateToPropsType = ReturnType<typeof mapStateToProps>;

export type PropsType = mapStateToPropsType

export default connect(mapStateToProps, { logout })(
    HeaderContainer
);