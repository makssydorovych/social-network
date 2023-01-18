import React from "react";
import s from "./Profile.module.css";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileInitialStateType, setUserProfile} from "../../redux/ProfileReducer";


class ProfileContainer extends React.Component<any, any>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(responce => {

            this.props.setUserProfile(responce.data)

        });
    }

    render() {
        return  (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}
type MapStateToProps = {
profile : ProfileInitialStateType
}
let mapStateToProps = (state: MapStateToProps) => ({
profile: state.profile
})
export default connect (mapStateToProps,{setUserProfile})(ProfileContainer);
