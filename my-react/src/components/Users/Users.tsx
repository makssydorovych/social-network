import React from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/API";
import {followingProgress} from "../../redux/UsersReducer";

const Users = (props:any) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages =[];
    for (let i=1; i < pagesCount; i++) {
        pages.push(i)
    }
return (
    <div>
        <div>
            {pages.map(p => {
                return   <span className={props.currentPage === p && s.selectedPage} onClick={()=>{props.onPageChanged(p)}}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile" + u.id}>
                            <img
                                src={u.photo.small != null ? u.photo.small : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png"}
                                className={s.userPhoto} alt={""}/>
                                </NavLink>
                        </div>
                        <div>
                            {u.followed ? <button disabled={props.followingProgress.some(id=>id ===u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id)
                                usersAPI.followUsers(props.follow, u.id)
                                    .then(data=>{
                                        if(data.resultCode === 0){
                                            props.unfollow(u.id)
                                        }props.toggleIsFollowingProgress(false, u.id)
                                    })

                            }}>Unfollow</button> : <button disabled={props.followingProgress.some(id=>id ===u.id)} onClick={() => {

                                props.toggleIsFollowingProgress(false, u.id)
                                usersAPI.followUsers(props.follow, u.id)
                                    .then(data=>{
                                        if(data.resultCode === 0){
                                            props.unfollow(u.id)
                                        }props.toggleIsFollowingProgress(true, u.id)
                                    })
                            }}>Follow</button>}

                        </div>
                    </span>
                <span>
                        <span><div>{u.fullName}</div><div>{u.status}</div></span>
                        <span><div>{u.location.country}</div><div>{u.location.city}</div></span>
                    </span>
            </div>)
        }
    </div>
)
}


export default Users;
