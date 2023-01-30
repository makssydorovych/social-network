import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";


type PropsType ={

}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        this.props.getAuthUserData
    }

    render() {
        return <Header {...this.props}/>
    }
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null

}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserDataAC: setAuthUserData})(HeaderContainer)