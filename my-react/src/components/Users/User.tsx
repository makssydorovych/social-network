import React from 'react';

import {Link} from "react-router-dom";
import s from "./users.module.css"
import logo from "../../assets/logo.png"
import {UserType} from "../../types/types";

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void

}
const User = (props: PropsType) => {
    return (
        <div className={s.pages}>
            <span>
         <div>   <Link to={`/profile/` + props.user.id}>
                <img src={props.user.photos.small != null ? props.user.photos.small : logo}
                className={s.userPhoto}/>

            </Link></div>
                <div>
                    {props.user.followed
                    ?<button disabled={props.followingInProgress.some(id=> id === props.user.id)} onClick={()=>{props.unfollow(props.user.id)}}>Unfollow</button> :
                    <button disabled={props.followingInProgress.some(id=> id === props.user.id)} onClick={()=>{props.follow(props.user.id)}}>Follow</button>}
                </div>
            </span>

        </div>
    );
};

export default User;