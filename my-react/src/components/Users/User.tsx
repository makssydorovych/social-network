import React from 'react';
import {UserType} from "../../redux/types";
import {Paginator} from "../../common/paginator/Paginator";
import {Link} from "react-router-dom";
import s from "./users.module.css"
import {unfollow} from "../../redux/users-reducer";

type PropsType = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    inFollowingProgress: number[];
    users: UserType[];
    user: UserType
    onPageChanged: (pageNumber: number) => void;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
}
const User = (props: PropsType) => {
    return (
        <div className={s.pages}>
            <span>
         <div>   <Link to={`/profile/` + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                className={s.userPhoto}/>

            </Link></div>
                <div>
                    {user.followed
                    ?<button disabled={followingInProgress.some(id=> id === user.id)} onClick={()=>{unfollow(user.id)}}>Unfollow</button>} :
                    <button disabled={followingInProgress.some(id=> id === user.id)} onClick={()=>{follow(user.id)}}>Follow</button>}
                </div>
            </span>

        </div>
    );
};

export default User;