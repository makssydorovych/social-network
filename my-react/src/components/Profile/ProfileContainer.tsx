import React from "react";
import s from "./Profile.module.css";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileInitialStateType, setUserProfile} from "../../redux/ProfileReducer";
import {useParams} from 'react-router-dom';

type PathParamType = {
    userId: string
}

export function withRouter(Children: any) {
    return (props: any) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(responce => {

            this.props.setUserProfile(responce.data)

        });
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

type MapStateToPropsType = {
    profile: any
}
type MapDispatchPropsType = {
    setUserProfile: (profile:any) => void
}
type PropsType = MapStateToPropsType & MapDispatchPropsType


let mapStateToProps = (state: MapStateToPropsType): MapStateToPropsType => ({
    profile: state.profile.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
