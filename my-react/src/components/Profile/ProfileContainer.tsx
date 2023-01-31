import React from "react";
import s from "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/ProfileReducer";
import {useNavigate, useParams} from 'react-router-dom';
import {ProfileType} from "../../redux/types";
import {AppRootStateType} from "../../redux/redux-store";

type PathParamType = {
    userId: string
}

export function withRouter(Children: any) {
    return (props: any) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId);

    }

    render() {
        const navigate = useNavigate()
        if(!this.props.isAuth) return navigate("/login")
        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

type MapStateToPropsType = {
    profile: ProfileType
    getUserProfile: ()=> void
    isAuth: boolean
}
type MapDispatchPropsType = {
    setUserProfile: (profile:ProfileType) => void
}
type PropsType = MapStateToPropsType & MapDispatchPropsType


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return{
        profile: state.profile,
        isAuth: state.auth.isAuth
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
